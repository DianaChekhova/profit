package trainer_handlers

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type trainerUpdateReq struct {
	trainer models.Trainer `json:"trainer"`
}

// TrainerUpdate обновляет информацию о тренере
// @Summary Обновляет данные тренера
// @Description Позволяет обновить информацию о тренере
// @Tags Trainers
// @Accept json
// @Produce json
// @Param trainer body trainerUpdateReq true "Информация о тренере для обновления"
// @Success 200 {string} string "Обновление выполнено успешно"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка сервера при обновлении"
// @Router /api/trainers [put]
func (bc *TrainerController) TrainerUpdate(w http.ResponseWriter, r *http.Request) {
	var req trainerUpdateReq
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	err := bc.trainerRepo.UpdateTrainer(r.Context(), &req.trainer)
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, err.Error())
	}

	backendController.WriteJSONResponse(w, http.StatusOK, nil)
}
