package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
)

type AdminMongoRepository struct {
	collection *mongo.Collection
}

// NewAdminMongoRepository создает новый экземпляр репозитория MongoDB.
func NewAdminMongoRepository(db *mongo.Database, ctx context.Context) use_cases.AdminRepository {
	return &AdminMongoRepository{
		collection: db.Collection("users"),
	}
}

func (repo *AdminMongoRepository) GetTrainerByID(ctx context.Context, id string) (*models.Trainer, error) {
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

func (repo *AdminMongoRepository) DeleteTrainerByID(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	_, err = repo.collection.DeleteOne(ctx, filter)
	return err
}

func (repo *AdminMongoRepository) TrainersList(ctx context.Context) ([]*models.Trainer, error) {
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

func (repo *AdminMongoRepository) CreateTrainer(ctx context.Context, trainer *models.Trainer) error {
	_, err := repo.collection.InsertOne(ctx, trainer)
	return err
}

func (repo *AdminMongoRepository) UpdateTrainer(ctx context.Context, trainer *models.Trainer) error {
	oid, err := primitive.ObjectIDFromHex(trainer.ID)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	update := bson.M{"$set": trainer}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return err
}

func (repo *AdminMongoRepository) DeleteTrainer(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}
	_, err = repo.collection.DeleteOne(ctx, filter)
	return err
}

func (repo *AdminMongoRepository) GetUserByID(ctx context.Context, id string) (*models.User, error) {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	filter := bson.M{"_id": oid}
	result := repo.collection.FindOne(ctx, filter)
	var user models.User
	err = result.Decode(&user)
	if err != nil {
		return nil, err
	}

	return &user, result.Err()
}

func (repo *AdminMongoRepository) UsersList(ctx context.Context) ([]*models.User, error) {
	filter := bson.M{}
	cursor, err := repo.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	var users []*models.User
	err = cursor.All(ctx, &users)
	if err != nil {
		return nil, err
	}

	return users, cursor.Err()
}

func (repo *AdminMongoRepository) UpdateUser(ctx context.Context, user *models.User) error {
	oid, err := primitive.ObjectIDFromHex(user.ID)
	if err != nil {
		return err
	}
	filter := bson.M{"_id": oid}
	update := bson.M{"$set": user}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return err
}

func (repo *AdminMongoRepository) CreateUser(ctx context.Context, user *models.User) error {
	filter := bson.M{"email": user.Email}
	update := bson.M{"$set": user}
	_, err := repo.collection.UpdateOne(ctx, filter, update)
	return err
}

func (repo *AdminMongoRepository) CreateSubscription(ctx context.Context, subscription models.Subscription) (*models.Subscription, error) {
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

func (repo *AdminMongoRepository) UpdateSubscription(ctx context.Context, subscription models.Subscription) (err error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return
	}
	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return
}

func (repo *AdminMongoRepository) EnableSubscription(ctx context.Context, subscription models.Subscription) (err error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return
	}

	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)

	return
}
func (repo *AdminMongoRepository) DisableSubscription(ctx context.Context, subscription models.Subscription) (err error) {
	oid, err := primitive.ObjectIDFromHex(subscription.ID)
	if err != nil {
		return
	}

	filter := bson.M{"_id": oid}
	update := bson.M{"$set": subscription}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return
}

func (repo *AdminMongoRepository) GetUserByEmail(ctx context.Context, email string) (*models.User, error) {
	filter := bson.M{"email": email}
	result := repo.collection.FindOne(ctx, filter)
	var user models.User
	err := result.Decode(&user)
	if err != nil {
		return nil, err
	}

	return &user, result.Err()
}

func (repo *AdminMongoRepository) GetTrainerByEmail(ctx context.Context, email string) (*models.Trainer, error) {
	filter := bson.M{"email": email}
	result := repo.collection.FindOne(ctx, filter)
	var trainer models.Trainer
	err := result.Decode(&trainer)
	if err != nil {
		return nil, err
	}

	return &trainer, result.Err()
}
