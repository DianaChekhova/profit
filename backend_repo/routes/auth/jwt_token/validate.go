package jwt_token

import (
	"errors"
	"github.com/golang-jwt/jwt/v5"
)

// ParseToken проверяет токен и возвращает ID пользователя, если он валиден
func ParseToken(tokenString string) (string, string, error) {
	// Парсим токен
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid signing method")
		}
		return jwtSecret, nil
	})

	if err != nil {
		return "", "", err
	}

	// Извлекаем claims
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		userID, ok := claims["user_id"].(string)
		if !ok {
			return "", "", errors.New("user_id not found in token")
		}

		role, ok := claims["role"].(string)
		if !ok {
			return "", "", errors.New("role not found in token")
		}

		return userID, role, nil
	}

	return "", "", errors.New("invalid token")
}
