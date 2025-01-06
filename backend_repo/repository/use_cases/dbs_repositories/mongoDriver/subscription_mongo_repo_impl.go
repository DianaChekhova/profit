package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
)

type SubscriptionMongoRepository struct {
	collection *mongo.Collection
}

func NewSubscriptionMongoRepository(db *mongo.Database, ctx context.Context) use_cases.SubscriptionRepository {
	return &SubscriptionMongoRepository{
		collection: db.Collection("subscriptions"),
	}
}
func (repo *SubscriptionMongoRepository) CreateSubscription(ctx context.Context, subscription models.Subscription) (*models.Subscription, error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return nil, err
	}
	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	if err != nil {
		return nil, err
	}

	return &subscription, nil
}

func (repo *SubscriptionMongoRepository) UpdateSubscription(ctx context.Context, subscription models.Subscription) (err error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return
	}
	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return
}

func (repo *SubscriptionMongoRepository) EnableSubscription(ctx context.Context, subscription models.Subscription) (err error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return
	}

	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)

	return
}

func (repo *SubscriptionMongoRepository) DisableSubscription(ctx context.Context, subscription models.Subscription) (err error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return
	}

	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return
}
