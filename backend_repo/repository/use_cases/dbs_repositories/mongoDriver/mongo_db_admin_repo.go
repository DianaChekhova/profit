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

type AdminMongoRepository struct {
	collection *mongo.Collection
}

// NewAdminMongoRepository создает новый экземпляр репозитория MongoDB.
func NewAdminMongoRepository(db *mongo.Database, ctx context.Context) use_cases.AdminRepository {
	return &AdminMongoRepository{
		collection: db.Collection("admins"),
	}
}

func (su *AdminMongoRepository) CreateAdmin(ctx context.Context, admin models.Admin) (err error) {
	_, err = su.collection.InsertOne(ctx, admin)
	return
}

func (su *AdminMongoRepository) DeleteAdminByID(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	_, err = su.collection.DeleteOne(ctx, bson.M{"_id": oid})
	return err
}
func (su *AdminMongoRepository) AdminList(ctx context.Context) ([]models.Admin, error) {
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

func (su *AdminMongoRepository) GetAdminByEmail(ctx context.Context, email string) (*models.Admin, error) {
	filter := bson.M{"email": email}
	cursor, err := su.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	// Итерируем по результатам
	for cursor.Next(ctx) {
		var admin bson.M
		if err := cursor.Decode(&admin); err != nil {
			return nil, err
		}

		// Преобразование ObjectID в строку
		oid := admin["_id"].(primitive.ObjectID)
		return &models.Admin{
			ID:       oid.Hex(),
			Name:     admin["name"].(string),
			Email:    admin["email"].(string),
			Password: admin["password"].(string),
		}, nil
	}

	// Если документы не найдены
	if err = cursor.Err(); err != nil {
		return nil, err
	}

	return nil, fmt.Errorf("admin not found")
}

func (su *AdminMongoRepository) GetAdminByOID(ctx context.Context, oid string) (*models.Admin, error) {
	oidHex, err := primitive.ObjectIDFromHex(oid)
	if err != nil {
		return nil, err
	}
	filter := bson.M{"_id": oidHex}
	admin := &models.Admin{}
	cursor := su.collection.FindOne(ctx, filter)
	if err := cursor.Decode(admin); err != nil {
		return nil, err
	}

	return admin, nil
}
