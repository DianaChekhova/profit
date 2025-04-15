package base_handlers

// ErrorResponse represents a standard error response format
type ErrorResponse struct {
	Error string `json:"error" example:"Error message"`
}
