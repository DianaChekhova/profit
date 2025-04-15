package trainer_handlers

import (
	"encoding/json"
	"net/http"
	"profit/routes/handlers/backendController"
)

type deleteHandler struct {
	id string
}

// TrainerDelete удаляет тренера
// @Summary Удаление тренера
// @Description Удаляет тренера по его идентификатору
// @Tags Trainers
// @Accept json
// @Produce json
// @Param id body deleteHandler true "Идентификатор тренера для удаления"
// @Success 204 {string} string "Тренер успешно удален"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 404 {string} string "Тренер не найден"
// @Failure 500 {string} string "Ошибка сервера при удалении тренера"
// @Router /trainer [delete]
func (bc *TrainerController) TrainerDelete(w http.ResponseWriter, r *http.Request) {
	var req deleteHandler
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	err := bc.trainerRepo.DeleteTrainerByID(r.Context(), req.id)
	if err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"failed to delete trainer",
		)
		return
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusNoContent,
		"trainer successfully deleted")
}
