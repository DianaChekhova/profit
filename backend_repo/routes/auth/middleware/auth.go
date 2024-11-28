package middleware

import (
	"context"
	"net/http"
	"profit/routes/auth/jwt_token"
	"strings"
)

// ключи для контекста
type contextKey string

const (
	ContextUserIDKey contextKey = "userID"
	ContextRoleKey   contextKey = "role"
)

func RoleMiddleware(requiredRole string, next http.Handler) http.Handler {
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

		// Валидация токена
		userID, role, err := jwt_token.ParseToken(parts[1])
		if err != nil {
			http.Error(w, "Invalid token", http.StatusUnauthorized)
			return
		}

		// Проверяем роль
		if role != requiredRole {
			http.Error(w, "Access denied: insufficient permissions", http.StatusForbidden)
			return
		}

		// Пробрасываем userID и role в контекст
		ctx := context.WithValue(r.Context(), ContextUserIDKey, userID)
		ctx = context.WithValue(ctx, ContextRoleKey, role)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
