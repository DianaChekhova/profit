package base_handlers

import (
	"encoding/json"
	"net/http"
	"profit/routes/auth/protection"

	"go.mongodb.org/mongo-driver/mongo"
)

type ProfileResponse struct {
	ID       string `json:"id"`
	Email    string `json:"email"`
	UserName string `json:"name"`
	Phone    string `json:"phone"`
	Role     string `json:"role"`
}

type UpdateProfileRequest struct {
	UserName string `json:"name"`
	Phone    string `json:"phone"`
}

// @Summary Получить профиль пользователя
// @Description Получение профиля текущего пользователя
// @Tags Profile
// @Security bearerAuth
// @Produce json
// @Success 200 {object} User
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /api/profile [get]
func (c *BaseController) GetProfile(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(protection.ContextUserIDKey).(string)

	user, err := c.userRepo.GetUserByID(r.Context(), userID)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "User not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	response := ProfileResponse{
		ID:       user.ID,
		Email:    user.Email,
		UserName: user.UserName,
		Phone:    user.PhoneNumber,
		Role:     user.Role,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

// @Summary Обновить профиль пользователя
// @Description Обновление профиля текущего пользователя
// @Tags Profile
// @Security bearerAuth
// @Accept json
// @Produce json
// @Param request body UpdateProfileRequest true "Данные для обновления профиля"
// @Success 200 {object} User
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /api/profile [put]
func (c *BaseController) UpdateProfile(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(protection.ContextUserIDKey).(string)

	user, err := c.userRepo.GetUserByID(r.Context(), userID)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "User not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	var req UpdateProfileRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	user.UserName = req.UserName
	user.PhoneNumber = req.Phone

	err = c.userRepo.UpdateUser(r.Context(), user)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Profile updated successfully"})
}
