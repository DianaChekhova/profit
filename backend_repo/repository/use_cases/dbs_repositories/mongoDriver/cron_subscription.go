package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type CronSubscriptionRepo struct {
	collection *mongo.Collection
}

func (c CronSubscriptionRepo) GetAllUserWithExpiredSubscription(ctx context.Context) ([]primitive.ObjectID, error) {
	filter := bson.M{}
	opts := options.Find().SetProjection(bson.M{"_id": 1})
	var results []primitive.ObjectID
	cur, err := c.collection.Find(ctx, filter, opts)
	if err != nil {
		return results, err
	}

	defer cur.Close(ctx)

	for cur.Next(ctx) {
		var result primitive.ObjectID
		err := cur.Decode(&result)
		if err != nil {
			return results, err
		}

		results = append(results, result)
	}

	if err := cur.Err(); err != nil {
		return results, err
	}

	return results, nil
}

func (c CronSubscriptionRepo) SetNotActiveAllUser(ctx context.Context) error {
	//TODO implement me
	panic("implement me")
}
