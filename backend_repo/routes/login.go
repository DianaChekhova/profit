package routes

import (
	"encoding/json"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"profit/routes/auth/jwt_token"
)

type AuthBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Role     string `json:"role"`
}

func (ctrl *UseCaseController) LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req AuthBody
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	
	user, err := ctrl.userDbRepo.FindUserByUserName(req.Username)
	if err != nil || !CheckPasswordHash(req.Password, user.Password) { // Проверяем хэш пароля
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}

	// Генерируем токен
	token, err := jwt_token.GenerateToken(user)
	if err != nil {
		http.Error(w, "Error generating token", http.StatusInternalServerError)
		return
	}

	// Отправляем токен клиенту
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}

func CheckPasswordHash(password, hashedPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	return err == nil
}
