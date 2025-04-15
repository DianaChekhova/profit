package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/routes/handlers/backendController"

	"github.com/go-chi/chi/v5"
)

// GetUser retrieves a single user by ID
// @Summary Get user by ID
// @Description Retrieves a single user by their ID
// @Tags User
// @Accept json
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {object} UserResponse
// @Failure 400 {string} string "Invalid user ID"
// @Failure 404 {string} string "User not found"
// @Failure 500 {string} string "Database error"
// @Router /api/users/{id} [get]
func (c *UserController) GetUser(w http.ResponseWriter, r *http.Request) {
	userID := chi.URLParam(r, "id")

	user, err := c.userRepo.GetUserByID(r.Context(), userID)
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusBadRequest, "Invalid user ID")
		return
	}

	if user == nil {
		backendController.WriteJSONResponse(w, http.StatusNotFound, "User not found")
		return
	}

	userResp := convertModelToUserResponse(user)

	// Get schedules if needed
	schedules, err := c.getSchedules(user.ScheduleIds, r.Context())
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusInternalServerError, "Error retrieving schedules")
		return
	}
	userResp.Schedules = schedules

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(userResp)
}
