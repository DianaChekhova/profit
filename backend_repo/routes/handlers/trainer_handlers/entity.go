package trainer_handlers

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
)

type TrainerController struct {
	trainerRepo use_cases.TrainerRepository
}

func NewTrainerController(ctx context.Context, database *mongo.Database) *TrainerController {
	return &TrainerController{
		trainerRepo: mongoDriver.NewTrainerMongoRepository(database, ctx),
	}
}
