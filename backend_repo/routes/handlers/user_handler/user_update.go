package user_handler

import (
	"encoding/json"
	"github.com/go-chi/chi/v5"
	"net/http"
	"profit/models"
	"profit/routes/handlers/backendController"
)

func (uc *UserController) UserUpdate(w http.ResponseWriter, r *http.Request) {
	var user models.User
	id := chi.URLParam(r, "id")
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	user.ID = id

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
