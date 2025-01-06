package mongoDriver

import (
	"go.mongodb.org/mongo-driver/mongo"
)

type SuperUserRepo struct {
	collection *mongo.Collection
}

func NewSuperUserRepo(collection *mongo.Collection) *SuperUserRepo {
	return &SuperUserRepo{
		collection: collection,
	}
}
