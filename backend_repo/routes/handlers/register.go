package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"profit/models"
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
func (ctrl *AdminCaseController) RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var req RegisterBody
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}
	req.Password = string(hashedPassword)

	err, code := ctrl.registerUserByRole(r.Context(), req)
	if err != nil {
		http.Error(w, err.Error(), code)
		return
	}
	
}

func (ctrl *AdminCaseController) registerUserByRole(ctx context.Context, request RegisterBody) (error, int) {
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

func (ctrl *AdminCaseController) registerUser(ctx context.Context, request RegisterBody) (error, int) {
	var user models.User
	user.Email = request.Email
	user.Password = request.Password
	user.UserName = request.Username
	user.CreatedAt = time.Now()

	if err := user.Validate(); err != nil {
		return err, http.StatusBadRequest
	}

	if err := ctrl.adminRepo.CreateUser(ctx, &user); err != nil {
		return err, http.StatusServiceUnavailable
	}

	return nil, http.StatusCreated
}

func (ctrl *AdminCaseController) registerAdminByRole(ctx context.Context, request RegisterBody) (error, int) {
	var admin models.Admin
	admin.Email = request.Email
	admin.Password = request.Password
	admin.Name = request.Username
	if err := ctrl.superUserRepo.CreateAdmin(ctx, admin); err != nil {
		return err, http.StatusServiceUnavailable
	}

	return nil, http.StatusCreated
}

func (ctrl *AdminCaseController) registerTrainerByRole(ctx context.Context, request RegisterBody) (error, int) {
	var trainer models.Trainer
	trainer.Email = request.Email
	trainer.Password = request.Password
	trainer.Name = request.Username
	if err := ctrl.adminRepo.CreateTrainer(ctx, &trainer); err != nil {
		return err, http.StatusServiceUnavailable
	}
	return nil, http.StatusCreated
}
