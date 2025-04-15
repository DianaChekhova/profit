package middleware

import (
	"net/http"
	"profit/models"
	"profit/routes/auth/protection"
)

func TrainerMiddleware(next http.Handler) http.Handler {
	return protection.RoleMiddleware(models.TrainerRole)(next)
}
