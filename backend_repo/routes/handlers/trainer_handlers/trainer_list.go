package trainer_handlers

import (
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type trainerAliace = *models.Trainer

// TrainerList обрабатывает GET-запрос для получения списка тренеров
// @Summary Возвращает список тренеров
// @Description Позволяет получить список всех тренеров
// @Tags Trainers
// @Accept json
// @Produce json
// @Success 200 {array} trainerAliace "Список тренеров"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при получении списка тренеров"
// @Router /trainers [get]
func (bc *TrainerController) TrainerList(w http.ResponseWriter, r *http.Request) {
	var (
		trainersList []trainerAliace
		err          error
	)
	trainersList, err = bc.trainerRepo.TrainersList(r.Context())
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusInternalServerError, err.Error())
		return
	}

	backendController.WriteJSONResponse(w, http.StatusOK, trainersList)
}
