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
	Token  string `json:"token"`
	Entity any    `json:"entity"`
}

// RegisterHandler обрабатывает POST запрос для регистрации нового пользователя
// @Summary Регистрация пользователя
// @Description Регистрирует пользователя в системе, проверяя имя пользователя и пароль
// @Tags Register
// @Accept json
// @Produce json
// @Param body body RegisterBody true "Данные для входа"
// @Success 201 {object} RegisterResponse "Пользователь успешно зарегистрирован"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка генерации пароля"
// @Failure 503 {string} string "Серверная ошибка регистрация пользователя"
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
	entity, err, code := ctrl.registerUserByRole(r.Context(), req)
	if err != nil {
		backendController.WriteJSONResponse(w, code, map[string]string{"error": err.Error()})
		return
	}

	token, err := jwt_token.GenerateToken(models.TrainerRole)
	if err != nil {
		backendController.WriteJSONResponse(w, code, map[string]string{"error": err.Error()})
		return
	}

	response := RegisterResponse{
		Token:  token,
		Entity: entity,
	}
	// Успешный ответ
	backendController.WriteJSONResponse(w, http.StatusOK, response)
}

func (ctrl *BaseController) registerUserByRole(ctx context.Context, request RegisterBody) (any, error, int) {
	switch request.Role {
	case models.UserRole:
		return ctrl.registerUser(ctx, request)
	case models.AdminRole:
		return ctrl.registerAdminByRole(ctx, request)
	case models.TrainerRole:
		return ctrl.registerTrainerByRole(ctx, request)
	default:
		return nil, fmt.Errorf("unknown role: %s", request.Role), 400
	}
}

func (ctrl *BaseController) registerUser(ctx context.Context, request RegisterBody) (any, error, int) {
	var user models.User
	user.Email = request.Email
	user.Password = request.Password
	user.UserName = request.Username
	user.CreatedAt = time.Now()

	if err := user.Validate(); err != nil {
		return nil, err, http.StatusBadRequest
	}

	if err := ctrl.userRepo.CreateUser(ctx, &user); err != nil {
		return nil, err, http.StatusServiceUnavailable
	}

	userResp, err := ctrl.userRepo.GetUserByEmail(ctx, request.Email)

	return userResp, err, http.StatusCreated
}

func (ctrl *BaseController) registerAdminByRole(ctx context.Context, request RegisterBody) (any, error, int) {
	var admin models.Admin
	admin.Email = request.Email
	admin.Password = request.Password
	admin.Name = request.Username
	if err := ctrl.adminRepo.CreateAdmin(ctx, admin); err != nil {
		return nil, err, http.StatusServiceUnavailable
	}

	adminResp, err := ctrl.adminRepo.GetAdminByEmail(ctx, admin.Email)
	return adminResp, err, http.StatusCreated
}

func (ctrl *BaseController) registerTrainerByRole(ctx context.Context, request RegisterBody) (any, error, int) {
	var trainer models.Trainer
	trainer.Email = request.Email
	trainer.Password = request.Password
	trainer.Name = request.Username
	if err := ctrl.trainerRepo.CreateTrainer(ctx, &trainer); err != nil {
		return nil, err, http.StatusServiceUnavailable
	}

	trainerResp, err := ctrl.trainerRepo.GetTrainerByEmail(ctx, trainer.Email)
	return trainerResp, err, http.StatusCreated
}
