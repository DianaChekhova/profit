package user_handler

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
)

type UserController struct {
	userRepo use_cases.UserRepository
}

func NewUserController(ctx context.Context, database *mongo.Database) *UserController {
	return &UserController{
		userRepo: mongoDriver.NewUserMongoRepository(database, ctx),
	}
}
