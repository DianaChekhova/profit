package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type userUpdateReq struct {
	user models.User `json:"user"`
}

// UserUpdate обновляет информацию о пользователя
// @Summary Обновляет данные тренера
// @Description Позволяет обновить информацию о пользователя
// @Tags Trainers
// @Accept json
// @Produce json
// @Param user body userUpdateReq true "Информация о пользователя для обновления"
// @Success 200 {string} string "Обновление выполнено успешно"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка сервера при обновлении"
// @Router /api/user [put]
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

	err := uc.userRepo.UpdateUser(r.Context(), &req.user)
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, err.Error())
	}

	backendController.WriteJSONResponse(w, http.StatusOK, nil)
}
