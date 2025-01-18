package mongoDriver

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
)

type ScheduleMongoRepository struct {
	collection *mongo.Collection
}

func NewScheduleMongoRepository(db *mongo.Database, ctx context.Context) use_cases.ScheduleRepository {
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

func (smr *ScheduleMongoRepository) GetScheduleByID(ctx context.Context, scheduleID string) (*models.Schedule, error) {
	oid, err := primitive.ObjectIDFromHex(scheduleID)
	if err != nil {
		return nil, err
	}
	filter := bson.M{"_id": oid}
	var result models.Schedule
	err = smr.collection.FindOne(ctx, filter).Decode(&result)
	if err != nil {
		return nil, err
	}
	return &result, nil
}

func (smr *ScheduleMongoRepository) GetScheduleArrayByIDs(ctx context.Context, scheduleIDs []string) ([]models.Schedule, error) {
	var oids []primitive.ObjectID
	for _, id := range scheduleIDs {
		oid, err := primitive.ObjectIDFromHex(id)
		if err != nil {
			return nil, err
		}
		oids = append(oids, oid)
	}

	filter := bson.M{"_id": bson.M{"$in": oids}}
	var result []models.Schedule
	cursor, err := smr.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var schedule models.Schedule
		err = cursor.Decode(&schedule)
		if err != nil {
			return nil, err
		}
		result = append(result, schedule)
	}

	if len(result) == 0 {
		return nil, nil
	}

	return result, nil
}

func (smr *ScheduleMongoRepository) CreateSchedules(ctx context.Context, schedules []models.Schedule) ([]string, error) {
	documents := make([]interface{}, len(schedules))
	for i, schedule := range schedules {
		documents[i] = schedule
	}

	// Вставка документов
	res, err := smr.collection.InsertMany(ctx, documents)
	if err != nil {
		return nil, err
	}

	// Преобразование InsertedIDs в []string
	var ids []string
	for _, id := range res.InsertedIDs {
		oid, ok := id.(primitive.ObjectID)
		if !ok {
			return nil, fmt.Errorf("failed to cast inserted ID to ObjectID")
		}
		ids = append(ids, oid.Hex())
	}

	return ids, nil
}

func (smr *ScheduleMongoRepository) DeleteScheduleByID(ctx context.Context, scheduleID string) error {
	oid, err := primitive.ObjectIDFromHex(scheduleID)
	if err != nil {
		return err
	}
	filter := bson.M{"_id": oid}
	_, err = smr.collection.DeleteOne(ctx, filter)
	return err
}

func (smr *ScheduleMongoRepository) UnsubFromScheduleByID(ctx context.Context, oid string, role models.Role) error {
	objectID, err := primitive.ObjectIDFromHex(oid)
	if err != nil {
		return err
	}

	switch role {
	case models.UserRole:
		filter := bson.M{"users_ids": objectID}
		_, err = smr.collection.DeleteOne(ctx, filter)
		update := bson.M{"$unset": bson.M{"trainers_ids": objectID}}
		_, err = smr.collection.UpdateOne(ctx, filter, update)
	case models.TrainerRole:
		filter := bson.M{"trainers_ids": objectID}
		update := bson.M{"$unset": bson.M{"trainers_ids": objectID}}
		_, err = smr.collection.UpdateOne(ctx, filter, update)
	}
	return err
}

func (smr *ScheduleMongoRepository) SubscribeToScheduleByID(ctx context.Context, oid string, role models.Role) error {
	objectID, err := primitive.ObjectIDFromHex(oid)
	if err != nil {
		return err
	}
	switch role {
	case models.UserRole:
		filter := bson.M{"users_ids": objectID}
		update := bson.M{"$set": bson.M{
			"users_ids": objectID,
		}}
		_, err = smr.collection.UpdateOne(ctx, filter, update)
	case models.TrainerRole:
		filter := bson.M{"trainers_ids": objectID}
		update := bson.M{"$set": bson.M{"trainers_ids": objectID}}
		_, err = smr.collection.UpdateOne(ctx, filter, update)
	}
	return err
}
