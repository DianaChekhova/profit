package user_handler

import (
	"github.com/go-chi/chi/v5"
	"net/http"
	"profit/routes/handlers/backendController"
)

// DeleteUser retrieves a single user by ID
// @Summary Get user by ID
// @Description Delete a single user by their ID
// @Tags User
// @Accept json
// @Produce json
// @Param id path string true "User ID"
// @Success 200 User suck and delete
// @Failure 400 {string} string "Invalid user ID"
// @Failure 404 {string} string "User not found"
// @Failure 500 {string} string "Database error"
// @Router /users/{id} [delete]
func (c *UserController) DeleteUser(w http.ResponseWriter, r *http.Request) {
	userID := chi.URLParam(r, "id")
	err := c.userRepo.DeleteUser(c.ctx, userID)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"client succsessfuly removed",
	)
}
