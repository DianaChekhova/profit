package subscription_handler

import (
	"encoding/json"
	"net/http"
	"profit/models"
	"profit/routes/auth/protection"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// @Summary Получить расписание персональных тренировок
// @Description Получение списка персональных тренировок пользователя
// @Tags Personal Schedule
// @Security bearerAuth
// @Produce json
// @Success 200 {array} PersonalSession
// @Failure 401 {object} ErrorResponse
// @Router /subscription/personal/schedule [get]
func (c *SubscriptionController) GetPersonalSchedule(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	objectID, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	opts := options.Find().SetSort(bson.D{{"startTime", 1}})
	cursor, err := c.db.Collection("personal_sessions").Find(c.ctx, bson.M{"clientId": objectID}, opts)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(c.ctx)

	var sessions []PersonalSession
	if err = cursor.All(c.ctx, &sessions); err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(sessions)
}

// @Summary Записаться на персональную тренировку
// @Description Регистрация пользователя на персональную тренировку
// @Tags Personal Schedule
// @Security bearerAuth
// @Accept json
// @Produce json
// @Param trainer_id path string true "ID тренера"
// @Param request body CreatePersonalSessionRequest true "Данные для записи на тренировку"
// @Success 201 {object} PersonalSession
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /subscription/personal/schedule/{trainer_id}/register [post]
func (c *SubscriptionController) RegisterForPersonalSession(w http.ResponseWriter, r *http.Request) {
	trainerID := chi.URLParam(r, "trainer_id")
	trainerObjectID, err := primitive.ObjectIDFromHex(trainerID)
	if err != nil {
		http.Error(w, "Invalid trainer ID", http.StatusBadRequest)
		return
	}

	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	userObjectID, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	var req CreatePersonalSessionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Check if trainer exists
	var trainer models.User
	err = c.db.Collection("users").FindOne(c.ctx, bson.M{
		"_id":  trainerObjectID,
		"role": "trainer",
	}).Decode(&trainer)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "Trainer not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	// Check if time slot is available
	count, err := c.db.Collection("personal_sessions").CountDocuments(c.ctx, bson.M{
		"trainerId": trainerObjectID,
		"$or": []bson.M{
			{
				"startTime": bson.M{
					"$lt": req.EndTime,
				},
				"endTime": bson.M{
					"$gt": req.StartTime,
				},
			},
		},
	})
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}
	if count > 0 {
		http.Error(w, "Time slot is not available", http.StatusBadRequest)
		return
	}

	session := PersonalSession{
		TrainerID:   trainerObjectID.Hex(),
		ClientID:    userObjectID.Hex(),
		Status:      "scheduled",
		Description: req.Description,
	}

	result, err := c.db.Collection("personal_sessions").InsertOne(c.ctx, session)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	session.ID = result.InsertedID.(primitive.ObjectID).Hex()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(session)
}

// @Summary Отменить запись на персональную тренировку
// @Description Отмена регистрации пользователя на персональную тренировку
// @Tags Personal Schedule
// @Security bearerAuth
// @Produce json
// @Param id path string true "ID персональной тренировки"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /subscription/personal/schedule/{id}/unregister [delete]
func (c *SubscriptionController) UnregisterFromPersonalSession(w http.ResponseWriter, r *http.Request) {
	sessionID := chi.URLParam(r, "id")
	objectID, err := primitive.ObjectIDFromHex(sessionID)
	if err != nil {
		http.Error(w, "Invalid session ID", http.StatusBadRequest)
		return
	}

	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	userObjectID, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	// Check if session exists and belongs to the user
	var session PersonalSession
	err = c.db.Collection("personal_sessions").FindOne(c.ctx, bson.M{
		"_id":      objectID,
		"clientId": userObjectID,
	}).Decode(&session)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "Session not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	// Delete the session
	result, err := c.db.Collection("personal_sessions").DeleteOne(c.ctx, bson.M{"_id": objectID})
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	if result.DeletedCount == 0 {
		http.Error(w, "Session not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Successfully unregistered from personal session"})
}
