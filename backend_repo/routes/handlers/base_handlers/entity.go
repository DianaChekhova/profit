package base_handlers

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
)

type BaseController struct {
	adminRepo    use_cases.AdminRepository
	userRepo     use_cases.UserRepository
	trainerRepo  use_cases.TrainerRepository
	subscription use_cases.SubscriptionRepository
}

func NewBaseController(ctx context.Context, database *mongo.Database) *BaseController {
	return &BaseController{
		adminRepo:    mongoDriver.NewAdminMongoRepository(database, ctx),
		userRepo:     mongoDriver.NewUserMongoRepository(database, ctx),
		trainerRepo:  mongoDriver.NewTrainerMongoRepository(database, ctx),
		subscription: mongoDriver.NewSubscriptionMongoRepository(database, ctx),
	}
}
