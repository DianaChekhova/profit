package dbs_repositories

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
	"time"
)

type UserMongoRepository struct {
	collection *mongo.Collection
	ctx        context.Context
}

// NewUserMongoRepository создает новый экземпляр репозитория MongoDB.
func NewUserMongoRepository(db *mongo.Database, ctx context.Context) *UserMongoRepository {
	return &UserMongoRepository{
		collection: db.Collection("users"),
		ctx:        ctx,
	}
}

func (repo *UserMongoRepository) Create(user *models.User) error {
	user.CreatedAt = time.Now()
	_, err := repo.collection.InsertOne(repo.ctx, user)
	return err
}

func (repo *UserMongoRepository) FindUserByUserName(name string) (models.User, error) {
	var user models.User
	result := repo.collection.FindOne(repo.ctx, bson.M{"name": name})
	if err := result.Decode(&user); err != nil {
		return models.User{}, err
	}

	return user, result.Err()
}

func (repo *UserMongoRepository) GetByID(id primitive.ObjectID) (*models.User, error) {
	filter := bson.M{"_id": id}
	result := repo.collection.FindOne(repo.ctx, filter)

	var user models.User
	if err := result.Decode(&user); err != nil {
		return nil, err
	}
	return &user, result.Err()
}

func (repo *UserMongoRepository) Update(user *models.User) error {
	filter := bson.M{"_id": user.ID}
	update := bson.M{"$set": user}
	_, err := repo.collection.UpdateOne(repo.ctx, filter, update)
	return err
}

func (repo *UserMongoRepository) Delete(id primitive.ObjectID) error {
	filter := bson.M{"_id": id}
	_, err := repo.collection.DeleteOne(repo.ctx, filter)
	return err
}

func (repo *UserMongoRepository) List() ([]*models.User, error) {
	filter := bson.M{}
	cursor, err := repo.collection.Find(repo.ctx, filter)
	if err != nil {
		return nil, err
	}

	var users []*models.User
	err = cursor.All(repo.ctx, &users)
	if err != nil {
		return nil, err
	}

	return users, nil
}
