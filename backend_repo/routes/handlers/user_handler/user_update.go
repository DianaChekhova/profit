package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type userUpdateReq struct {
	User models.User `json:"User"`
}

// UserUpdate обновляет информацию о пользователя
// @Summary Обновляет данные пользователя
// @Description Позволяет обновить информацию о пользователя
// @Tags User
// @Accept json
// @Produce json
// @Param User body userUpdateReq true "Информация о пользователя для обновления"
// @Success 200 {string} string "Обновление выполнено успешно"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка сервера при обновлении"
// @Router /api/User [put]
func (uc *UserController) UserUpdate(w http.ResponseWriter, r *http.Request) {
	var req userUpdateReq
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	err := uc.userRepo.UpdateUser(r.Context(), &req.User)
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, err.Error())
	}

	backendController.WriteJSONResponse(w, http.StatusOK, nil)
}
