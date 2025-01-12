package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/routes/handlers/backendController"
)

type userDeleteReq struct {
	id string
}

// UserDelete удаляет пользователя
// @Summary Удаление пользователя
// @Description Удаляет пользователя по его идентификатору
// @Tags User
// @Accept json
// @Produce json
// @Param id body userDeleteReq true "Идентификатор пользователя для удаления"
// @Success 204 {string} string "Тренер успешно удален"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 404 {string} string "Тренер не найден"
// @Failure 500 {string} string "Ошибка сервера при удалении пользователя"
// @Router /api/User [delete]
func (uc *UserController) UserDelete(w http.ResponseWriter, r *http.Request) {
	var req userDeleteReq
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	err := uc.userRepo.DeleteUser(r.Context(), req.id)
	if err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"failed to delete User",
		)
		return
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusNoContent,
		"User successfully deleted")
}
