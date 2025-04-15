package middleware

import (
	"net/http"
	"profit/models"
	"profit/routes/auth/protection"
)

func AdminMiddleware(next http.Handler) http.Handler {
	return protection.RoleMiddleware(models.AdminRole)(next)
}
