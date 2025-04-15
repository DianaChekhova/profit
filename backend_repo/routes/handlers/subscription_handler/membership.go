package subscription_handler

import (
	"encoding/json"
	"net/http"
	"profit/routes/auth/protection"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// @Summary Получить информацию об абонементе
// @Description Получение информации о текущем абонементе пользователя
// @Tags Membership
// @Security bearerAuth
// @Produce json
// @Success 200 {object} Membership
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /api/membership [get]
func (c *SubscriptionController) GetMembership(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	objectID, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	var membership Membership
	err = c.db.Collection("memberships").FindOne(c.ctx, bson.M{"userId": objectID}).Decode(&membership)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "Membership not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(membership)
}

// @Summary Создать новый абонемент
// @Description Создание нового абонемента для пользователя
// @Tags Membership
// @Security bearerAuth
// @Accept json
// @Produce json
// @Param request body CreateMembershipRequest true "Данные для создания абонемента"
// @Success 201 {object} Membership
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Router /api/membership [post]
func (c *SubscriptionController) CreateMembership(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	objectID, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	var req CreateMembershipRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	membership := Membership{
		UserID:      objectID.Hex(),
		Type:        req.Type,
		StartDate:   req.StartDate,
		EndDate:     req.EndDate,
		Status:      "active",
		FreezeCount: 0,
	}

	result, err := c.db.Collection("memberships").InsertOne(c.ctx, membership)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	membership.ID = result.InsertedID.(primitive.ObjectID).Hex()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(membership)
}

// @Summary Заморозить абонемент
// @Description Временная заморозка абонемента пользователя
// @Tags Membership
// @Security bearerAuth
// @Produce json
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 404 {object} ErrorResponse
// @Router /api/membership/freeze [patch]
func (c *SubscriptionController) FreezeMembership(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(protection.ContextUserIDKey).(string)
	objectID, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	var membership Membership
	err = c.db.Collection("memberships").FindOne(c.ctx, bson.M{"userId": objectID}).Decode(&membership)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(w, "Membership not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	if membership.Status != "active" {
		http.Error(w, "Membership is not active", http.StatusBadRequest)
		return
	}

	if membership.FreezeCount >= 3 {
		http.Error(w, "Maximum freeze count reached", http.StatusBadRequest)
		return
	}

	update := bson.M{
		"$set": bson.M{
			"status": "frozen",
		},
		"$inc": bson.M{
			"freezeCount": 1,
		},
	}

	_, err = c.db.Collection("memberships").UpdateOne(c.ctx, bson.M{"userId": objectID}, update)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Membership frozen successfully"})
}
