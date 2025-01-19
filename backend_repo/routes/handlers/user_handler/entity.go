package user_handler

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
)

type UserController struct {
	userRepo         use_cases.UserRepository
	scheduleRepo     use_cases.ScheduleRepository
	subscriptionRepo use_cases.SubscriptionRepository
}

func NewUserController(ctx context.Context, database *mongo.Database) *UserController {
	return &UserController{
		userRepo:         mongoDriver.NewUserMongoRepository(database, ctx),
		scheduleRepo:     mongoDriver.NewScheduleMongoRepository(database, ctx),
		subscriptionRepo: mongoDriver.NewSubscriptionMongoRepository(database, ctx),
	}
}

type UserResponse struct {
	ID           string              `json:"id"`
	UserName     string              `json:"name"`
	Email        string              `json:"email"`
	Role         string              `json:"role"`
	Subscription models.Subscription `json:"subscription"`
	Schedules    []models.Schedule   `json:"schedules"`
	Address      string              `json:"address"`
	BirthDate    string              `json:"birth"`
	Passport     string              `json:"passport"`
	Status       string              `json:"status"`
}

func convertModelToUserResponse(user *models.User) *UserResponse {
	return &UserResponse{
		ID:           user.ID,
		UserName:     user.UserName,
		Email:        user.Email,
		Role:         user.Role,
		Subscription: user.Subscription,
		Address:      user.Address,
		BirthDate:    user.BirthDate,
		Passport:     user.Passport,
		Status:       user.Status,
	}
}

func convertUserToModel(user UserResponse) *models.User {
	return &models.User{
		ID:           user.ID,
		UserName:     user.UserName,
		Email:        user.Email,
		Role:         user.Role,
		Subscription: user.Subscription,
		Address:      user.Address,
		BirthDate:    user.BirthDate,
		Passport:     user.Passport,
		Status:       user.Status,
	}
}
