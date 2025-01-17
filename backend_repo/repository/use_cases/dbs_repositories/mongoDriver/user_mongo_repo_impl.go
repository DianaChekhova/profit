package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"profit/repository/use_cases"
)

type UserMongoRepository struct {
	collection *mongo.Collection
}

func NewUserMongoRepository(db *mongo.Database, ctx context.Context) use_cases.UserRepository {
	return &UserMongoRepository{
		collection: db.Collection("users"),
	}
}

func (repo *UserMongoRepository) GetUserByEmail(ctx context.Context, email string) (*models.User, error) {
	filter := bson.M{"email": email}
	result := repo.collection.FindOne(ctx, filter)
	var user models.User
	err := result.Decode(&user)
	if err != nil {
		return nil, err
	}

	return &user, result.Err()
}

func (repo *UserMongoRepository) GetUserByID(ctx context.Context, id string) (*models.User, error) {
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

func (repo *UserMongoRepository) UsersList(ctx context.Context) ([]*models.User, error) {
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

func (repo *UserMongoRepository) UpdateUser(ctx context.Context, user *models.User) error {
	oid, err := primitive.ObjectIDFromHex(user.ID)
	if err != nil {
		return err
	}
	filter := bson.M{"_id": oid}
	update := bson.M{"$set": user}
	_, err = repo.collection.UpdateOne(ctx, filter, update)
	return err
}

func (repo *UserMongoRepository) CreateUser(ctx context.Context, user *models.User) error {
	_, err := repo.collection.InsertOne(ctx, user)
	return err
}

func (repo *UserMongoRepository) DeleteUser(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	filter := bson.M{"_id": oid}
	_, err = repo.collection.DeleteOne(ctx, filter)
	return err
}
