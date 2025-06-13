package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Suggestion struct {
	Oid      primitive.ObjectID `json:"id,omitempty" bson:"id,omitempty"`
	Name     string             `json:"name" bson:"name"`
	Email    string             `json:"email" bson:"email"`
	Number   string             `json:"number" bson:"number"`
	IsActive bool               `json:"is_active" bson:"is_active"`
}
