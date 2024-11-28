package models

import (
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

// User представляет пользователя системы
type User struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"id,omitempty"`
	UserName  string             `json:"name" validate:"required,min=3,max=20" bson:"name"`
	Email     string             `json:"email" validate:"required,email" bson:"email"`
	Password  string             `json:"password" validate:"required,min=6" bson:"password"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	Role      string             `json:"role" bson:"role" validate:"required"`
}

func (u User) Validate() error {
	validate := validator.New()
	return validate.Struct(u)
}
