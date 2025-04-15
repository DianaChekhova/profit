package trainer_handlers

import (
	"encoding/json"
	"net/http"
	"profit/routes/auth/protection"
	"time"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ScheduleSession struct {
	ID          string    `json:"id"`
	TrainerID   string    `json:"trainerId"`
	ClientID    string    `json:"clientId"`
	StartTime   time.Time `json:"startTime"`
	EndTime     time.Time `json:"endTime"`
	Status      string    `json:"status"`
	Description string    `json:"description"`
}

type UpdateSessionRequest struct {
	StartTime   time.Time `json:"startTime"`
	EndTime     time.Time `json:"endTime"`
	Status      string    `json:"status"`
	Description string    `json:"description"`
}

func (c *TrainerController) GetPersonalSchedule(w http.ResponseWriter, r *http.Request) {
	trainerID := r.Context().Value(protection.ContextUserIDKey).(string)
	_, err := primitive.ObjectIDFromHex(trainerID)
	if err != nil {
		http.Error(w, "Invalid trainer ID", http.StatusBadRequest)
		return
	}

	// TODO: Implement GetPersonalSchedule in the repository
	// For now, return an empty array
	sessions := []ScheduleSession{}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(sessions)
}

func (c *TrainerController) UpdatePersonalSession(w http.ResponseWriter, r *http.Request) {
	sessionID := chi.URLParam(r, "id")
	_, err := primitive.ObjectIDFromHex(sessionID)
	if err != nil {
		http.Error(w, "Invalid session ID", http.StatusBadRequest)
		return
	}

	var req UpdateSessionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// TODO: Implement UpdatePersonalSession in the repository
	// For now, just return success

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Session updated successfully"})
}

func (c *TrainerController) GetTrainerGroupSchedule(w http.ResponseWriter, r *http.Request) {
	trainerID := r.Context().Value(protection.ContextUserIDKey).(string)
	_, err := primitive.ObjectIDFromHex(trainerID)
	if err != nil {
		http.Error(w, "Invalid trainer ID", http.StatusBadRequest)
		return
	}

	// TODO: Implement GetTrainerGroupSchedule in the repository
	// For now, return an empty array
	sessions := []ScheduleSession{}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(sessions)
}
