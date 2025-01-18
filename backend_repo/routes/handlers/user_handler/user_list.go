package user_handler

import (
	"context"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

// UserList обрабатывает GET-запрос для получения списка пользователей
// @Summary Возвращает список пользователей
// @Description Позволяет получить список всех пользователей
// @Tags User
// @Accept json
// @Produce json
// @Success 200 {array} UserResponse "Список пользователей"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при получении списка пользователей"
// @Router /api/users [get]
func (uc *UserController) UserList(w http.ResponseWriter, r *http.Request) {
	var (
		users []*models.User
		err   error
	)

	users, err = uc.userRepo.UsersList(r.Context())
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	var usersResp = make([]UserResponse, len(users))
	for _, user := range users {
		userResp := convertModelToUserResponse(user)
		userResp.Schedules, err = uc.getSchedules(user.ScheduleIds, r.Context())
		if err != nil {
			backendController.WriteJSONResponse(w, http.StatusInternalServerError, err.Error())
		}
	}
	backendController.WriteJSONResponse(w, http.StatusOK, usersResp)
}

func (uc *UserController) getSchedules(oids []string, ctx context.Context) ([]models.Schedule, error) {
	schedules, err := uc.scheduleRepo.GetScheduleArrayByIDs(ctx, oids)
	return schedules, err
}
