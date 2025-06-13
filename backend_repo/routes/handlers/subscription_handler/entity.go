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
	ID           string    `json:"id" bson:"_id,omitempty"`
	Trainer      string    `json:"trainer" bson:"trainer,omitempty"`
	TrainingType string    `json:"training" bson:"training,omitempty"`
	Name         string    `json:"name" bson:"name"`
	Description  string    `json:"description" bson:"description"`
	Time         string    `json:"time" bson:"time"`
	Date         time.Time `json:"date" bson:"date"`
	MaxClients   int       `json:"maxClients" bson:"maxClients"`
	Status       string    `json:"status" bson:"status"`
	Type         string    `json:"type" bson:"type"`
}

type PersonalSession struct {
	ID          string `json:"id" bson:"_id,omitempty"`
	TrainerID   string `json:"trainerId" bson:"trainerId"`
	ClientID    string `json:"clientId" bson:"clientId"`
	Type        string `json:"type" bson:"type"`
	Time        string `json:"time" bson:"startTime"`
	Status      string `json:"status" bson:"status"`
	Description string `json:"description" bson:"description"`
}

type CreateGroupSessionRequest struct {
	Trainer     string `json:"trainer" bson:"trainer,omitempty"`
	Name        string `json:"name" bson:"name"`
	Description string `json:"description" bson:"description"`
	Time        string `json:"time" bson:"time"`
	StartTime   string `json:"startTime" bson:"startTime"`
	EndTime     string `json:"endTime" bson:"endTime"`
	Type        string `json:"type" bson:"type"`
	Date        string `json:"date" bson:"date"`
	Training    string `json:"training" bson:"training"`
	MaxClients  int    `json:"maxClients" bson:"maxClients"`
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
