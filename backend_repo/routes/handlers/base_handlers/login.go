package base_handlers

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"profit/models"
	"profit/routes/auth/jwt_token"
	"profit/routes/handlers/backendController"

	"golang.org/x/crypto/bcrypt"
)

type AuthBody struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
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
// @Router /login [post]
func (ctrl *BaseController) LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req AuthBody
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	token, err, code := ctrl.loginByRole(r.Context(), req)
	if err != nil {
		backendController.WriteJSONResponse(
			w,
			code,
			"Invalid input",
		)
	}

	w.Header().Set("Content-Type", "application/json")

	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		map[string]string{"Token": token},
	)
}

func (ctrl *BaseController) loginByRole(ctx context.Context, req AuthBody) (string, error, int) {
	// 1. Пробуем найти пользователя среди обычных пользователей
	user, err := ctrl.userRepo.GetUserByEmail(ctx, req.Email)
	if err == nil {
		// Проверяем пароль
		if bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)) == nil {
			token, err := jwt_token.GenerateToken(user.ID, models.UserRole)
			return token, err, http.StatusOK
		}
	}
	// 2. Пробуем среди админов
	admin, err := ctrl.adminRepo.GetAdminByEmail(ctx, req.Email)
	if err == nil {
		if bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(req.Password)) == nil {
			token, err := jwt_token.GenerateToken(admin.ID, models.AdminRole)
			return token, err, http.StatusOK
		}
	}
	// 3. Пробуем среди тренеров
	trainer, err := ctrl.trainerRepo.GetTrainerByEmail(ctx, req.Email)
	if err == nil {
		if bcrypt.CompareHashAndPassword([]byte(trainer.Password), []byte(req.Password)) == nil {
			token, err := jwt_token.GenerateToken(trainer.ID, models.TrainerRole)
			return token, err, http.StatusOK
		}
	}
	// Если не нашли или пароль не подошёл
	return "", errors.New("invalid credentials"), http.StatusUnauthorized
}

func (ctrl *BaseController) loginUser(ctx context.Context, req AuthBody) (token string, err error, code int) {
	user, err := ctrl.userRepo.GetUserByEmail(ctx, req.Email)
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

func (ctrl *BaseController) loginAdmin(ctx context.Context, req AuthBody) (token string, err error, code int) {
	admin, err := ctrl.adminRepo.GetAdminByEmail(ctx, req.Email)
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

func (ctrl *BaseController) loginTrainer(ctx context.Context, req AuthBody) (token string, err error, code int) {
	trainer, err := ctrl.trainerRepo.GetTrainerByEmail(ctx, req.Email)
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
