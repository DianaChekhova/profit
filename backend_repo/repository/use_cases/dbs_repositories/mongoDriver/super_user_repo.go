package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
)

type SuperUserRepo struct {
	collection *mongo.Collection
}

func NewSuperUserRepo(collection *mongo.Collection) *SuperUserRepo {
	return &SuperUserRepo{
		collection: collection,
	}
}

func (su *SuperUserRepo) CreateAdmin(ctx context.Context, admin models.Admin) (err error) {
	_, err = su.collection.InsertOne(ctx, admin)
	return
}

func (su *SuperUserRepo) DeleteAdminByID(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	_, err = su.collection.DeleteOne(ctx, bson.M{"_id": oid})
	return err
}
func (su *SuperUserRepo) AdminList(ctx context.Context) ([]models.Admin, error) {
	filter := bson.M{}
	cursor, err := su.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	var admins []models.Admin
	for cursor.Next(ctx) {
		var admin models.Admin
		err := cursor.Decode(&admin)
		if err != nil {
			return nil, err
		}
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}
	return admins, nil
}
func (su *SuperUserRepo) GetAdminByEmail(ctx context.Context, email string) (*models.Admin, error) {
	filter := bson.M{"email": email}
	cursor, err := su.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	var admin models.Admin
	err = cursor.Decode(&admin)

	return &admin, err

}
