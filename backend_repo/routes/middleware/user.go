package middleware

import (
	"net/http"
	"profit/models"
	"profit/routes/auth/protection"
)

func UserMiddleware(next http.Handler) http.Handler {
	return protection.RoleMiddleware(models.UserRole)(next)
}
