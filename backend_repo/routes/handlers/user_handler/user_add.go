package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type userReqHandler struct {
	User models.User `json:"user"`
}

// AddUser добавляет нового пользователя
// @Summary Добавление нового пользователя
// @Description Позволяет добавить нового пользователя в систему
// @Tags User
// @Accept json
// @Produce json
// @Param User body userReqHandler true "Данные Юзера"
// @Success 200 {string} string "Пользователь успешно создан"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при создании пользователя"
// @Router /api/User [post]
func (uc *UserController) AddUser(w http.ResponseWriter, r *http.Request) {
	var req userReqHandler
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	err := uc.userRepo.CreateUser(r.Context(), &req.User)
	if err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"failed to create User",
		)
		return
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"User succsessfuly created",
	)
}
