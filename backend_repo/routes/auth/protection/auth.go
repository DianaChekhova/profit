package protection

import (
	"context"
	"net/http"
	"profit/routes/auth/jwt_token"
	"strings"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Извлекаем токен из заголовка Authorization
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization header missing", http.StatusUnauthorized)
			return
		}

		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			http.Error(w, "Invalid authorization header format", http.StatusUnauthorized)
			return
		}

		// Проверяем токен и извлекаем userID и role
		userID, role, err := jwt_token.ParseToken(parts[1])
		if err != nil {
			http.Error(w, "Invalid token", http.StatusUnauthorized)
			return
		}

		// Добавляем userID и role в контекст
		ctx := context.WithValue(r.Context(), ContextUserIDKey, userID)
		ctx = context.WithValue(ctx, ContextRoleKey, role)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
