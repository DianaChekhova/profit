package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
)

type TrainerMongoRepository struct {
	collection *mongo.Collection
}

func NewTrainerMongoRepository(db *mongo.Database, ctx context.Context) use_cases.TrainerRepository {
	return &TrainerMongoRepository{
		collection: db.Collection("trainers"),
	}
}

func (repo *TrainerMongoRepository) GetTrainerByID(ctx context.Context, id string) (*models.Trainer, error) {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	filter := bson.M{"_id": oid}
	result := repo.collection.FindOne(ctx, filter)
	var trainer models.Trainer
	err = result.Decode(&trainer)
	if err != nil {
		return nil, err
	}

	return &trainer, result.Err()
}

func (repo *TrainerMongoRepository) DeleteTrainerByID(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	_, err = repo.collection.DeleteOne(ctx, filter)
	return err
}

func (repo *TrainerMongoRepository) TrainersList(ctx context.Context) ([]*models.Trainer, error) {
	filter := bson.M{}
	cursor, err := repo.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	var trainers []*models.Trainer
	err = cursor.All(ctx, &trainers)
	if err != nil {
		return nil, err
	}

	return trainers, nil
}

func (repo *TrainerMongoRepository) CreateTrainer(ctx context.Context, trainer *models.Trainer) error {
	_, err := repo.collection.InsertOne(ctx, trainer)
	return err
}

func (repo *TrainerMongoRepository) UpdateTrainer(ctx context.Context, trainer *models.Trainer) error {
	oid, err := primitive.ObjectIDFromHex(trainer.ID)
	if err != nil {
		return err
	}

	// Копируем структуру и очищаем ID
	trainerCopy := *trainer
	trainerCopy.ID = "" // убрать _id, чтобы не обновлялся

	// Преобразуем в bson.M
	updateData, err := bson.Marshal(trainerCopy)
	if err != nil {
		return err
	}

	var updateDoc bson.M
	if err := bson.Unmarshal(updateData, &updateDoc); err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	update := bson.M{"$set": updateDoc}

	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return err
}

func (repo *TrainerMongoRepository) DeleteTrainer(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	_, err = repo.collection.DeleteOne(ctx, filter)
	return err
}
func (repo *TrainerMongoRepository) GetTrainerByEmail(ctx context.Context, email string) (*models.Trainer, error) {
	filter := bson.M{"email": email}
	result := repo.collection.FindOne(ctx, filter)
	var trainer models.Trainer
	err := result.Decode(&trainer)
	if err != nil {
		return nil, err
	}

	return &trainer, result.Err()
}
