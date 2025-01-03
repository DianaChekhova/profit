package protection

type contextKey string

const (
	ContextUserIDKey contextKey = "userID" // Ключ для хранения ID пользователя в контексте

	ContextRoleKey contextKey = "role" // Ключ для хранения роли пользователя в конте
)
