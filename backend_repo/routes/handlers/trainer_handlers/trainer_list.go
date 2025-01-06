package trainer_handlers

import (
	"net/http"
	"profit/routes/handlers/backendController"
)

// TrainerList обрабатывает GET-запрос для получения списка тренеров
// @Summary Возвращает список тренеров
// @Description Позволяет получить список всех тренеров
// @Tags Trainers
// @Accept json
// @Produce json
// @Success 200 {array} User "Список тренеров"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при получении списка тренеров"
// @Router /api/trainers [get]
func (bc *TrainerController) TrainerList(w http.ResponseWriter, r *http.Request) {
	trainersList, err := bc.trainerRepo.TrainersList(r.Context())
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusInternalServerError, err.Error())
		return
	}

	backendController.WriteJSONResponse(w, http.StatusOK, trainersList)
}
