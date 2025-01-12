package base_handlers

import (
	"net/http"
	"profit/routes/handlers/backendController"
)

// LogoutHandler обрабатывает POST-запрос для выхода пользователя
// @Summary Выход из системы
// @Description Позволяет пользователю выйти из системы, делая токен недействительным
// @Tags Auth
// @Accept json
// @Produce json
// @Success 200 {string} string "Выход выполнен успешно"
// @Failure 401 {string} string "Пользователь не авторизован"
// @Failure 500 {string} string "Ошибка при обработке запроса"
// @Router /api/logout [post]
func (ctrl *BaseController) LogoutHandler(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	if token == "" {
		backendController.WriteJSONResponse(
			w,
			http.StatusUnauthorized,
			"User not authenticated",
		)
		return
	}

	// В данном случае просто игнорируем токен, не добавляем в черный список
	// После этого токен автоматически станет недействительным, когда его срок действия истечет.
	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"Logout successful",
	)
}
