package docs

// ErrorResponse представляет ответ с ошибкой
type ErrorResponse struct {
	Error string `json:"error" example:"Сообщение об ошибке"`
}

// SuccessResponse представляет успешный ответ
type SuccessResponse struct {
	Message string `json:"message" example:"Операция выполнена успешно"`
}

// LoginRequest представляет запрос на авторизацию
type LoginRequest struct {
	Email    string `json:"email" example:"user@example.com"`
	Password string `json:"password" example:"password123"`
}

// LoginResponse представляет ответ на авторизацию
type LoginResponse struct {
	Token string `json:"token" example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`
	User  User   `json:"user"`
}

// RegisterRequest представляет запрос на регистрацию
type RegisterRequest struct {
	Email     string `json:"email" example:"user@example.com"`
	Password  string `json:"password" example:"password123"`
	FirstName string `json:"firstName" example:"Иван"`
	LastName  string `json:"lastName" example:"Иванов"`
	Role      string `json:"role" example:"client" enums:"admin,trainer,client"`
}

// RegisterResponse представляет ответ на регистрацию
type RegisterResponse struct {
	Token string `json:"token" example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`
	User  User   `json:"user"`
}

// User представляет пользователя системы
type User struct {
	ID        string `json:"id" example:"507f1f77bcf86cd799439011"`
	Email     string `json:"email" example:"user@example.com"`
	FirstName string `json:"firstName" example:"Иван"`
	LastName  string `json:"lastName" example:"Иванов"`
	Role      string `json:"role" example:"client"`
	Status    string `json:"status" example:"active"`
	CreatedAt string `json:"createdAt" example:"2024-01-01T12:00:00Z"`
}

// UpdateProfileRequest представляет запрос на обновление профиля
type UpdateProfileRequest struct {
	FirstName string `json:"firstName" example:"Иван"`
	LastName  string `json:"lastName" example:"Иванов"`
	Email     string `json:"email" example:"user@example.com"`
}

// Membership представляет абонемент пользователя
type Membership struct {
	ID         string    `json:"id" example:"507f1f77bcf86cd799439011"`
	UserID     string    `json:"userId" example:"507f1f77bcf86cd799439011"`
	Type       string    `json:"type" example:"standard"`
	StartDate  string    `json:"startDate" example:"2024-01-01T12:00:00Z"`
	EndDate    string    `json:"endDate" example:"2024-12-31T12:00:00Z"`
	Status     string    `json:"status" example:"active"`
	FreezeCount int      `json:"freezeCount" example:"0"`
}

// CreateMembershipRequest представляет запрос на создание абонемента
type CreateMembershipRequest struct {
	Type      string `json:"type" example:"standard"`
	StartDate string `json:"startDate" example:"2024-01-01T12:00:00Z"`
	EndDate   string `json:"endDate" example:"2024-12-31T12:00:00Z"`
}

// GroupSession представляет групповое занятие
type GroupSession struct {
	ID          string   `json:"id" example:"507f1f77bcf86cd799439011"`
	TrainerID   string   `json:"trainerId" example:"507f1f77bcf86cd799439011"`
	Name        string   `json:"name" example:"Йога для начинающих"`
	Description string   `json:"description" example:"Групповое занятие по йоге"`
	StartTime   string   `json:"startTime" example:"2024-01-01T10:00:00Z"`
	EndTime     string   `json:"endTime" example:"2024-01-01T11:00:00Z"`
	MaxClients  int      `json:"maxClients" example:"20"`
	Status      string   `json:"status" example:"scheduled"`
}

// CreateGroupSessionRequest представляет запрос на создание группового занятия
type CreateGroupSessionRequest struct {
	TrainerID   string `json:"trainerId" example:"507f1f77bcf86cd799439011"`
	Name        string `json:"name" example:"Йога для начинающих"`
	Description string `json:"description" example:"Групповое занятие по йоге"`
	StartTime   string `json:"startTime" example:"2024-01-01T10:00:00Z"`
	EndTime     string `json:"endTime" example:"2024-01-01T11:00:00Z"`
	MaxClients  int    `json:"maxClients" example:"20"`
}

// PersonalSession представляет персональную тренировку
type PersonalSession struct {
	ID          string `json:"id" example:"507f1f77bcf86cd799439011"`
	TrainerID   string `json:"trainerId" example:"507f1f77bcf86cd799439011"`
	ClientID    string `json:"clientId" example:"507f1f77bcf86cd799439011"`
	StartTime   string `json:"startTime" example:"2024-01-01T10:00:00Z"`
	EndTime     string `json:"endTime" example:"2024-01-01T11:00:00Z"`
	Status      string `json:"status" example:"scheduled"`
	Description string `json:"description" example:"Персональная тренировка"`
}

// CreatePersonalSessionRequest представляет запрос на создание персональной тренировки
type CreatePersonalSessionRequest struct {
	TrainerID   string `json:"trainerId" example:"507f1f77bcf86cd799439011"`
	StartTime   string `json:"startTime" example:"2024-01-01T10:00:00Z"`
	EndTime     string `json:"endTime" example:"2024-01-01T11:00:00Z"`
	Description string `json:"description" example:"Персональная тренировка"`
} 