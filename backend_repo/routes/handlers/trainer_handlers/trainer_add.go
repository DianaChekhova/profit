package trainer_handlers

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type trainerReqHandler struct {
	trainer models.Trainer
}

// AddTrainer добавляет нового тренера
// @Summary Добавление нового тренера
// @Description Позволяет добавить нового тренера в систему
// @Tags Trainers
// @Accept json
// @Produce json
// @Param trainer body trainerReqHandler true "Данные тренера"
// @Success 200 {string} string "Тренер успешно создан"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при создании тренера"
// @Router /trainer [post]
func (tc *TrainerController) AddTrainer(w http.ResponseWriter, r *http.Request) {
	var req models.Trainer
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"Invalid input",
		)
		return
	}

	err := tc.trainerRepo.CreateTrainer(r.Context(), &req)
	if err != nil {
		backendController.WriteJSONResponse(
			w,
			http.StatusBadRequest,
			"failed to create trainer",
		)
		return
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"trainer succsessfuly created",
	)
}
