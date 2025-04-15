package middleware

import (
	"net/http"
	"profit/routes/auth/protection"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return protection.AuthMiddleware(next)
}
