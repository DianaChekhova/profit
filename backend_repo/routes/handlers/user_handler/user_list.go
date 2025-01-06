package user_handler

import (
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type usersAliaceType = *models.User

// UserList обрабатывает GET-запрос для получения списка пользователей
// @Summary Возвращает список пользователей
// @Description Позволяет получить список всех пользователей
// @Tags Users
// @Accept json
// @Produce json
// @Success 200 {array} usersAliaceType "Список пользователей"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при получении списка пользователей"
// @Router /api/users [get]
func (uc *UserController) UserList(w http.ResponseWriter, r *http.Request) {
	var (
		users []usersAliaceType
		err   error
	)

	users, err = uc.userRepo.UsersList(r.Context())
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, err.Error())
		return
	}

	backendController.WriteJSONResponse(w, http.StatusOK, users)
}
