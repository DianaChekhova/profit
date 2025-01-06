package base_handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
	"time"
)

type RegisterBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Role     string `json:"role"`
	Email    string `json:"email"`
}

// RegisterHandler обрабатывает POST запрос для регистрации нового пользователя
// @Summary Регистрация пользователя
// @Description Регистрирует пользователя в системе, проверяя имя пользователя и пароль
// @Tags Register
// @Accept json
// @Produce json
// @Param body body RegisterBody true "Данные для входа"
// @Success 201 {object} map[string]string "Пользователь успешно зарегистрирован"
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
	err, code := ctrl.registerUserByRole(r.Context(), req)
	if err != nil {
		backendController.WriteJSONResponse(w, code, map[string]string{"error": err.Error()})
		return
	}

	// Успешный ответ
	backendController.WriteJSONResponse(w, http.StatusOK, map[string]string{"message": "User registered successfully"})
}

func (ctrl *BaseController) registerUserByRole(ctx context.Context, request RegisterBody) (error, int) {
	switch request.Role {
	case models.UserRole:
		return ctrl.registerUser(ctx, request)
	case models.AdminRole:
		return ctrl.registerAdminByRole(ctx, request)
	case models.TrainerRole:
		return ctrl.registerTrainerByRole(ctx, request)
	default:
		return fmt.Errorf("unknown role: %s", request.Role), 400
	}
}

func (ctrl *BaseController) registerUser(ctx context.Context, request RegisterBody) (error, int) {
	var user models.User
	user.Email = request.Email
	user.Password = request.Password
	user.UserName = request.Username
	user.CreatedAt = time.Now()

	if err := user.Validate(); err != nil {
		return err, http.StatusBadRequest
	}

	if err := ctrl.userRepo.CreateUser(ctx, &user); err != nil {
		return err, http.StatusServiceUnavailable
	}

	return nil, http.StatusCreated
}

func (ctrl *BaseController) registerAdminByRole(ctx context.Context, request RegisterBody) (error, int) {
	var admin models.Admin
	admin.Email = request.Email
	admin.Password = request.Password
	admin.Name = request.Username
	if err := ctrl.adminRepo.CreateAdmin(ctx, admin); err != nil {
		return err, http.StatusServiceUnavailable
	}

	return nil, http.StatusCreated
}

func (ctrl *BaseController) registerTrainerByRole(ctx context.Context, request RegisterBody) (error, int) {
	var trainer models.Trainer
	trainer.Email = request.Email
	trainer.Password = request.Password
	trainer.Name = request.Username
	if err := ctrl.trainerRepo.CreateTrainer(ctx, &trainer); err != nil {
		return err, http.StatusServiceUnavailable
	}
	return nil, http.StatusCreated
}
