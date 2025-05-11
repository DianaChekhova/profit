package cron_jobs

import (
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

func DeactivateExpiredSubscriptions(ctx context.Context, db *mongo.Database) error {
	collection := db.Collection("memberships")

	filter := bson.M{
		"end_time":  bson.M{"$lt": time.Now()},
		"is_active": true,
	}
	update := bson.M{
		"$set": bson.M{"is_active": false},
	}

	res, err := collection.UpdateMany(ctx, filter, update)
	if err != nil {
		return err
	}

	fmt.Printf("Deactivated %d expired subscriptions\n", res.ModifiedCount)
	return nil
}
