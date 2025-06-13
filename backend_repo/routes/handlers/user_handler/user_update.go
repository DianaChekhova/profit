package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/auth/protection"
	"profit/routes/handlers/backendController"
)

func (uc *UserController) UserUpdate(w http.ResponseWriter, r *http.Request) {
	var user models.User
	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	user.ID = userID

	if err := uc.userRepo.UpdateUser(r.Context(), &user); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"client succsessfuly updated",
	)

}
