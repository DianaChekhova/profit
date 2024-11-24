package routes

import (
	"encoding/json"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"profit/logs"
	"profit/models"
	"time"
)

// RegisterHandler обрабатывает POST запрос для регистрации нового пользователя
func (ctrl *UseCaseController) RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	// Валидация данных (например, можно использовать сторонние библиотеки для валидации)
	if err := user.Validate(); err != nil {
		logs.Logger.Errorf("validate err: %v", err)
		http.Error(w, "Invalid input", http.StatusBadRequest)
	}

	// Хеширование пароля
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}

	user.Password = string(hashedPassword)
	user.CreatedAt = time.Now()

	// Сохранение в базу данных
	//if err := repositories.CreateUser(user); err != nil {
	//	http.Error(w, "Failed to create user", http.StatusInternalServerError)
	//	return
	//}

	w.WriteHeader(http.StatusCreated)
	err = json.NewEncoder(w).Encode(map[string]string{"message": "User registered successfully"})
	if err != nil {
		http.Error(w, "Error creating user", http.StatusInternalServerError)
	}
}
