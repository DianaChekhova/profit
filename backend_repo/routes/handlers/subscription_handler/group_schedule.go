package subscription_handler

import (
	"encoding/json"
	"net/http"
	"profit/routes/auth/protection"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type ErrorResponse struct {
	Error string `json:"error" example:"Error message"`
}

type SuccessResponse struct {
	Message string `json:"message" example:"Operation completed successfully"`
}

// @Summary Получить расписание групповых занятий
// @Description Получение списка всех групповых занятий
// @Tags Group Schedule
// @Security bearerAuth
// @Produce json
// @Success 200 {array} GroupSession
// @Failure 401 {object} ErrorResponse
// @Router /subscription/group/schedule [get]
func (c *SubscriptionController) GetGroupSchedule(w http.ResponseWriter, r *http.Request) {
	opts := options.Find().SetSort(bson.D{{"startTime", 1}})
	cursor, err := c.db.Collection("group_sessions").Find(c.ctx, bson.M{}, opts)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(c.ctx)

	var sessions []GroupSession
	if err = cursor.All(c.ctx, &sessions); err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(sessions)
}

// @Summary Создать новое групповое занятие
// @Description Создание нового группового занятия
// @Tags Group Schedule
// @Security bearerAuth
// @Accept json
// @Produce json
// @Param request body CreateGroupSessionRequest true "Данные для создания группового занятия"
// @Success 201 {object} GroupSession
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Router /subscription/group/schedule [post]
func (c *SubscriptionController) CreateGroupSession(w http.ResponseWriter, r *http.Request) {
	var req CreateGroupSessionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	trainerID, err := primitive.ObjectIDFromHex(req.TrainerID)
	if err != nil {
		http.Error(w, "Invalid trainer ID", http.StatusBadRequest)
		return
	}

	session := GroupSession{
		TrainerID:   trainerID.Hex(),
		Name:        req.Name,
		Description: req.Description,
		StartTime:   req.StartTime,
		EndTime:     req.EndTime,
		MaxClients:  req.MaxClients,
		Status:      "scheduled",
	}

	result, err := c.db.Collection("group_sessions").InsertOne(c.ctx, session)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	session.ID = result.InsertedID.(primitive.ObjectID).Hex()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(session)
}

// @Summary Обновить групповое занятие
// @Description Обновление информации о групповом занятии
// @Tags Group Schedule
// @Security bearerAuth
// @Accept json
// @Produce json
// @Param id path string true "ID группового занятия"
// @Param request body CreateGroupSessionRequest true "Данные для обновления группового занятия"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /subscription/group/schedule/{id} [put]
func (c *SubscriptionController) UpdateGroupSession(w http.ResponseWriter, r *http.Request) {
	sessionID := chi.URLParam(r, "id")
	objectID, err := primitive.ObjectIDFromHex(sessionID)
	if err != nil {
		http.Error(w, "Invalid session ID", http.StatusBadRequest)
		return
	}

	var req CreateGroupSessionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	update := bson.M{
		"$set": bson.M{
			"name":        req.Name,
			"description": req.Description,
			"startTime":   req.StartTime,
			"endTime":     req.EndTime,
			"maxClients":  req.MaxClients,
		},
	}

	result, err := c.db.Collection("group_sessions").UpdateOne(c.ctx, bson.M{"_id": objectID}, update)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	if result.MatchedCount == 0 {
		http.Error(w, "Session not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Group session updated successfully"})
}

// @Summary Удалить групповое занятие
// @Description Удаление группового занятия
// @Tags Group Schedule
// @Security bearerAuth
// @Produce json
// @Param id path string true "ID группового занятия"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /subscription/group/schedule/{id} [delete]
func (c *SubscriptionController) DeleteGroupSession(w http.ResponseWriter, r *http.Request) {
	sessionID := chi.URLParam(r, "id")
	objectID, err := primitive.ObjectIDFromHex(sessionID)
	if err != nil {
		http.Error(w, "Invalid session ID", http.StatusBadRequest)
		return
	}

	result, err := c.db.Collection("group_sessions").DeleteOne(c.ctx, bson.M{"_id": objectID})
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	if result.DeletedCount == 0 {
		http.Error(w, "Session not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Group session deleted successfully"})
}

// @Summary Записаться на групповое занятие
// @Description Регистрация пользователя на групповое занятие
// @Tags Group Schedule
// @Security bearerAuth
// @Produce json
// @Param id path string true "ID группового занятия"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /subscription/group/schedule/{id}/register [post]
func (c *SubscriptionController) RegisterForGroupSession(w http.ResponseWriter, r *http.Request) {
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

	// Check if session exists and has available spots
	var session GroupSession
	err = c.db.Collection("group_sessions").FindOne(c.ctx, bson.M{"_id": objectID}).Decode(&session)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "Session not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	// Check if user is already registered
	count, err := c.db.Collection("group_registrations").CountDocuments(c.ctx, bson.M{
		"sessionId": objectID,
		"userId":    userObjectID,
	})
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}
	if count > 0 {
		http.Error(w, "User already registered for this session", http.StatusBadRequest)
		return
	}

	// Register user for the session
	registration := bson.M{
		"sessionId": objectID,
		"userId":    userObjectID,
		"status":    "registered",
	}

	_, err = c.db.Collection("group_registrations").InsertOne(c.ctx, registration)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Successfully registered for group session"})
}

// @Summary Отменить запись на групповое занятие
// @Description Отмена регистрации пользователя на групповое занятие
// @Tags Group Schedule
// @Security bearerAuth
// @Produce json
// @Param id path string true "ID группового занятия"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /subscription/group/schedule/{id}/unregister [delete]
func (c *SubscriptionController) UnregisterFromGroupSession(w http.ResponseWriter, r *http.Request) {
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

	result, err := c.db.Collection("group_registrations").DeleteOne(c.ctx, bson.M{
		"sessionId": objectID,
		"userId":    userObjectID,
	})
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	if result.DeletedCount == 0 {
		http.Error(w, "Registration not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Successfully unregistered from group session"})
}
