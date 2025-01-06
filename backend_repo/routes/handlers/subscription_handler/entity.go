package subscription_handler

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
)

type SubscriptionController struct {
	subscriptionRepo use_cases.SubscriptionRepository
}

func NewSubscriptionController(ctx context.Context, database *mongo.Database) *SubscriptionController {
	return &SubscriptionController{
		subscriptionRepo: mongoDriver.NewSubscriptionMongoRepository(database, ctx),
	}
}
