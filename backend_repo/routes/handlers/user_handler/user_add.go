package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

type userReqHandler = models.User

// AddUser добавляет нового клиента
// @Summary добавление нового клиента
// @Description Позволяет добавить нового клиента в систему
// @Tags Users
// @Accept json
// @Produce json
// @Param user body userReqHandler true "Данные клиента"
// @Success 200 {string} string "Клиент успешно создан"
// @Failure 400 {string} string "Неверный ввод"
// @Failure 500 {string} string "Ошибка при создании клиента"
// @Router /user [post]
func (c *UserController) AddUser(w http.ResponseWriter, r *http.Request) {
	var resp models.User
	if err := json.NewDecoder(r.Body).Decode(&resp); err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
	}

	if err := c.userRepo.CreateUser(c.ctx, &resp); err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
	}
	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"client succsessfuly created",
	)
}
