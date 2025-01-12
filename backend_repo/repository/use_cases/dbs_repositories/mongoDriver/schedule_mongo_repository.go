package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
)

type ScheduleMongoRepository struct {
	collection *mongo.Collection
}

func NewScheduleMongoRepository(db mongo.Database, collection *mongo.Collection) use_cases.ScheduleRepository {
	return &ScheduleMongoRepository{
		collection: db.Collection("schedule"),
	}
}

func (smr *ScheduleMongoRepository) CreateSchedule(ctx context.Context, schedule models.Schedule) (string, error) {
	insertResult, err := smr.collection.InsertOne(ctx, schedule)
	if err != nil {
		return "", err
	}

	oid := insertResult.InsertedID.(primitive.ObjectID)

	return oid.Hex(), nil
}

func (smr *ScheduleMongoRepository) UpdateSchedule(ctx context.Context, schedule models.Schedule) error {
	oid, err := primitive.ObjectIDFromHex(schedule.ID)
	if err != nil {
		return err
	}
	filter := bson.M{"_id": oid}
	update := bson.M{
		"$set": schedule,
	}

	_, err = smr.collection.UpdateOne(ctx, filter, update)
	return err
}
func (smr *ScheduleMongoRepository) EnableSchedule(ctx context.Context, schedule models.Schedule) error {
	oid, err := primitive.ObjectIDFromHex(schedule.ID)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	update := bson.M{
		"$set": bson.M{
			"enabled": true,
		},
	}

	_, err = smr.collection.UpdateOne(ctx, filter, update)
	return err
}
func (smr *ScheduleMongoRepository) DisableSchedule(ctx context.Context, schedule models.Schedule) error {
	oid, err := primitive.ObjectIDFromHex(schedule.ID)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	update := bson.M{
		"$set": bson.M{
			"enabled": false,
		},
	}

	_, err = smr.collection.UpdateOne(ctx, filter, update)
	return err
}
