package base_handlers

import (
	"net/http"
	"profit/models"
	"profit/routes/auth/protection"
	"profit/routes/handlers/backendController"
)

type MeResponse struct {
	entityName string      `json:"entity_name"`
	role       models.Role `json:"role"`
}

// Me
// @Summary Получить информацию о текущем пользователе
// @Description Возвращает информацию о пользователе на основе его роли (User, Trainer, Admin)
// @Tags User
// @Accept json
// @Produce json
// @Param Authorization header string true "Bearer токен для аутентификации"
// @Success 200 {object} MeResponse "Информация о пользователе"
// @Failure 400 {string} string "Ошибка: не удалось получить данные из контекста или некорректная роль"
// @Failure 500 {string} string "Ошибка: внутренняя ошибка сервера"
// @Router /me [get]
func (ctrl *BaseController) Me(w http.ResponseWriter, r *http.Request) {
	entityOid, ok := r.Context().Value(protection.ContextUserIDKey).(string)
	if !ok {
		backendController.WriteJSONResponse(w, 400, "failed to get userId from request context")
	}
	role, ok := r.Context().Value(protection.ContextRoleKey).(string)
	if !ok {
		backendController.WriteJSONResponse(w, 400, "failed to get role from request context")
	}

	var entityName string
	switch role {
	case models.UserRole:
		user, err := ctrl.userRepo.GetUserByID(r.Context(), entityOid)
		if err != nil {
			backendController.WriteJSONResponse(w, 500, err.Error())
		}

		if user == nil {
			backendController.WriteJSONResponse(w, 400, "user not found")
			return
		}
		entityName = user.UserName

	case models.TrainerRole:
		trainer, err := ctrl.trainerRepo.GetTrainerByID(r.Context(), entityOid)
		if err != nil {
			backendController.WriteJSONResponse(w, 500, err.Error())
		}

		if trainer == nil {
			backendController.WriteJSONResponse(w, 400, "trainer not found")
			return
		}

		entityName = trainer.Name

	case models.AdminRole:
		admin, err := ctrl.adminRepo.GetAdminByOID(r.Context(), entityOid)
		if err != nil {
			backendController.WriteJSONResponse(w, 500, err.Error())
		}

		if admin == nil {
			backendController.WriteJSONResponse(w, 400, "admin not found")
			return
		}
		entityName = admin.Name
	default:
		backendController.WriteJSONResponse(w, 400, "invalid role")
	}

	backendController.WriteJSONResponse(w, 200, &MeResponse{entityName: entityName, role: role})
}
