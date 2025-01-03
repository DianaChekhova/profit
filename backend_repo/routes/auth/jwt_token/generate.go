package jwt_token

import (
	"profit/models"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("egor_lukin_lox") // общий токен

// GenerateToken создает JWT-токен для пользователя
func GenerateToken(oid string, role models.Role) (string, error) {
	claims := jwt.MapClaims{
		"user_id": oid,
		"role":    role,
		"exp":     time.Now().Add(time.Hour * 24).Unix(), // Время жизни токена
		"iat":     time.Now().Unix(),                     // Время создания токена
	}

	// Создаём токен
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Подписываем токен с секретным ключом
	return token.SignedString(jwtSecret)
}
