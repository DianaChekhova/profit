package base_handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"profit/models"
	"profit/routes/auth/jwt_token"
	"profit/routes/handlers/backendController"
	"time"
)

type RegisterBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Role     string `json:"role"`
	Email    string `json:"email"`
}

type RegisterResponse struct {
	Token     string `json:"token"`
	EntityOID string `json:"entity_oid"`
}

// RegisterHandler
// @Summary Регистрация пользователя
// @Description Регистрирует нового пользователя в системе, создавая учетную запись на основе указанной роли.
// @Tags Register
// @Accept json
// @Produce json
// @Param body body base_handlers.RegisterBody true "Данные для регистрации пользователя"
// @Success 201 {object} base_handlers.RegisterResponse "Пользователь успешно зарегистрирован. Возвращает токен и идентификатор пользователя."
// @Failure 400 {object} map[string]string "Неверный ввод данных."
// @Failure 500 {object} map[string]string "Ошибка при обработке данных (например, ошибка хэширования пароля)."
// @Failure 503 {object} map[string]string "Ошибка сервера при регистрации пользователя."
// @Router /api/register [post]
func (ctrl *BaseController) RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var req RegisterBody

	// Декодируем входящие данные
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, map[string]string{"error": "Invalid input"})
		return
	}

	// Хэшируем пароль
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusInternalServerError, map[string]string{"error": "Error hashing password"})
		return
	}
	req.Password = string(hashedPassword)

	// Регистрируем пользователя
	oid, err, code := ctrl.registerUserByRole(r.Context(), req)
	if err != nil {
		backendController.WriteJSONResponse(w, code, map[string]string{"error": err.Error()})
		return
	}

	token, err := jwt_token.GenerateToken(oid, models.TrainerRole)
	if err != nil {
		backendController.WriteJSONResponse(w, code, map[string]string{"error": err.Error()})
		return
	}

	response := RegisterResponse{
		Token:     token,
		EntityOID: oid,
	}
	// Успешный ответ
	backendController.WriteJSONResponse(w, http.StatusOK, response)
}

func (ctrl *BaseController) registerUserByRole(ctx context.Context, request RegisterBody) (string, error, int) {
	switch request.Role {
	case models.UserRole:
		return ctrl.registerUser(ctx, request)
	case models.AdminRole:
		return ctrl.registerAdminByRole(ctx, request)
	case models.TrainerRole:
		return ctrl.registerTrainerByRole(ctx, request)
	default:
		return "", fmt.Errorf("unknown role: %s", request.Role), 400
	}
}

func (ctrl *BaseController) registerUser(ctx context.Context, request RegisterBody) (string, error, int) {
	var user models.User
	user.Email = request.Email
	user.Password = request.Password
	user.UserName = request.Username
	user.CreatedAt = time.Now()

	if err := user.Validate(); err != nil {
		return "", err, http.StatusBadRequest
	}

	if err := ctrl.userRepo.CreateUser(ctx, &user); err != nil {
		return "", err, http.StatusServiceUnavailable
	}

	userResp, err := ctrl.userRepo.GetUserByEmail(ctx, request.Email)
	if userResp == nil {
		return "", err, http.StatusNotFound
	}
	return userResp.ID, err, http.StatusCreated
}

func (ctrl *BaseController) registerAdminByRole(ctx context.Context, request RegisterBody) (string, error, int) {
	var admin models.Admin
	admin.Email = request.Email
	admin.Password = request.Password
	admin.Name = request.Username
	if err := ctrl.adminRepo.CreateAdmin(ctx, admin); err != nil {
		return "", err, http.StatusServiceUnavailable
	}

	adminResp, err := ctrl.adminRepo.GetAdminByEmail(ctx, admin.Email)
	if adminResp == nil {
		return "", err, http.StatusNotFound
	}
	return adminResp.ID, err, http.StatusCreated
}

func (ctrl *BaseController) registerTrainerByRole(ctx context.Context, request RegisterBody) (string, error, int) {
	var trainer models.Trainer
	trainer.Email = request.Email
	trainer.Password = request.Password
	trainer.Name = request.Username
	if err := ctrl.trainerRepo.CreateTrainer(ctx, &trainer); err != nil {
		return "", err, http.StatusServiceUnavailable
	}

	trainerResp, err := ctrl.trainerRepo.GetTrainerByEmail(ctx, trainer.Email)
	if trainerResp == nil {
		return "", err, http.StatusNotFound
	}
	return trainerResp.ID, err, http.StatusCreated
}
