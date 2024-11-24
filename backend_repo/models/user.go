package models

import (
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

// User представляет пользователя системы
type User struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"id,omitempty"`
	Username  string             `json:"username" validate:"required,min=3,max=20" json:"username,omitempty"`
	Email     string             `json:"email" validate:"required,email" json:"email,omitempty"`
	Password  string             `json:"password" validate:"required,min=6" json:"password,omitempty"`
	CreatedAt time.Time          `json:"created_at" json:"created_at"`
}

func (u User) Validate() error {
	validate := validator.New()
	return validate.Struct(u)
}
