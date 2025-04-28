package user_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

func (uc *UserController) UserUpdate(w http.ResponseWriter, r *http.Request) {
	var user models.User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
	}

	if err := uc.userRepo.UpdateUser(r.Context(), &user); err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
	}

	backendController.WriteJSONResponse(
		w,
		http.StatusOK,
		"client succsessfuly updated",
	)

}
