package handlers

import (
	"context"
	"encoding/json"
	"errors"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"profit/models"
	"profit/routes/auth/jwt_token"
)

type AuthBody struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}

// LoginHandler обрабатывает POST-запрос для входа пользователя
// @Summary Авторизация пользователя
// @Description Позволяет пользователю войти в систему, проверяя имя пользователя и пароль
// @Tags Auth
// @Accept json
// @Produce json
// @Param body body AuthBody true "Данные для входа"
// @Success 200 {object} map[string]string "Токен успешной авторизации"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 401 {string} string "Неверное имя пользователя или пароль"
// @Failure 500 {string} string "Ошибка генерации токена"
// @Router /api/login [post]
func (ctrl *AdminCaseController) LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req AuthBody
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	token, err, code := ctrl.loginByRole(r.Context(), req)
	if err != nil {
		http.Error(w, err.Error(), code)
	}
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(map[string]string{"token": token})
}

func (ctrl *AdminCaseController) loginByRole(ctx context.Context, req AuthBody) (string, error, int) {
	switch req.Role {
	case models.UserRole:
		return ctrl.loginUser(ctx, req)
	case models.AdminRole:
		return ctrl.loginAdmin(ctx, req)
	case models.TrainerRole:
		return ctrl.loginTrainer(ctx, req)
	default:
		return "", errors.New("invalid role"), http.StatusBadRequest
	}
}

func (ctrl *AdminCaseController) loginUser(ctx context.Context, req AuthBody) (token string, err error, code int) {
	user, err := ctrl.adminRepo.GetUserByEmail(ctx, req.Email)
	if err != nil {
		return "", err, http.StatusServiceUnavailable
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password))
	if err != nil {
		return "", errors.New("invalid password"), http.StatusBadRequest
	}

	token, err = jwt_token.GenerateToken(user.ID, models.UserRole)
	if err != nil {
		return "", err, http.StatusInternalServerError
	}
	return token, nil, http.StatusOK
}

func (ctrl *AdminCaseController) loginAdmin(ctx context.Context, req AuthBody) (token string, err error, code int) {
	admin, err := ctrl.superUserRepo.GetAdminByEmail(ctx, req.Email)
	if err != nil {
		return "", err, http.StatusServiceUnavailable
	}
	err = bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(req.Password))
	if err != nil {
		return "", errors.New("invalid password"), http.StatusBadRequest
	}

	token, err = jwt_token.GenerateToken(admin.ID, models.AdminRole)
	if err != nil {
		return "", err, http.StatusInternalServerError
	}

	return token, nil, http.StatusOK
}

func (ctrl *AdminCaseController) loginTrainer(ctx context.Context, req AuthBody) (token string, err error, code int) {
	trainer, err := ctrl.adminRepo.GetTrainerByEmail(ctx, req.Email)
	if err != nil {
		return "", err, http.StatusServiceUnavailable
	}
	err = bcrypt.CompareHashAndPassword([]byte(trainer.Password), []byte(req.Password))
	if err != nil {
		return "", errors.New("invalid password"), http.StatusBadRequest
	}
	token, err = jwt_token.GenerateToken(trainer.ID, models.TrainerRole)
	if err != nil {
		return "", err, http.StatusInternalServerError
	}
	return token, nil, http.StatusOK
}
