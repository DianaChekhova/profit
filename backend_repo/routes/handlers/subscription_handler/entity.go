package subscription_handler

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
)

type SubscriptionController struct {
	ctx context.Context
	db  *mongo.Database
}

func NewSubscriptionController(ctx context.Context, db *mongo.Database) *SubscriptionController {
	return &SubscriptionController{
		ctx: ctx,
		db:  db,
	}
}

type Membership struct {
	ID          string    `json:"id" bson:"_id,omitempty"`
	UserID      string    `json:"userId" bson:"userId"`
	Type        string    `json:"type" bson:"type"`
	StartDate   time.Time `json:"startDate" bson:"startDate"`
	EndDate     time.Time `json:"endDate" bson:"endDate"`
	Status      string    `json:"status" bson:"status"`
	FreezeCount int       `json:"freezeCount" bson:"freezeCount"`
}

type GroupSession struct {
	ID          string    `json:"id" bson:"_id,omitempty"`
	TrainerID   string    `json:"trainerId" bson:"trainerId"`
	Name        string    `json:"name" bson:"name"`
	Description string    `json:"description" bson:"description"`
	StartTime   time.Time `json:"startTime" bson:"startTime"`
	EndTime     time.Time `json:"endTime" bson:"endTime"`
	MaxClients  int       `json:"maxClients" bson:"maxClients"`
	Status      string    `json:"status" bson:"status"`
}

type PersonalSession struct {
	ID          string    `json:"id" bson:"_id,omitempty"`
	TrainerID   string    `json:"trainerId" bson:"trainerId"`
	ClientID    string    `json:"clientId" bson:"clientId"`
	StartTime   time.Time `json:"startTime" bson:"startTime"`
	EndTime     time.Time `json:"endTime" bson:"endTime"`
	Status      string    `json:"status" bson:"status"`
	Description string    `json:"description" bson:"description"`
}

type CreateGroupSessionRequest struct {
	TrainerID   string    `json:"trainerId"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	StartTime   time.Time `json:"startTime"`
	EndTime     time.Time `json:"endTime"`
	MaxClients  int       `json:"maxClients"`
}

type CreateMembershipRequest struct {
	Type      string    `json:"type"`
	StartDate time.Time `json:"startDate"`
	EndDate   time.Time `json:"endDate"`
}

type CreatePersonalSessionRequest struct {
	StartTime   time.Time `json:"startTime"`
	EndTime     time.Time `json:"endTime"`
	Description string    `json:"description"`
}
