package models

import (
	"github.com/go-playground/validator/v10"
	"time"
)

// User представляет пользователя системы
type User struct {
	ID           string       `json:"id,omitempty" bson:"id,omitempty"`
	UserName     string       `json:"name" validate:"required,min=3,max=20" bson:"name"`
	Email        string       `json:"email" validate:"required,email" bson:"email"`
	Password     string       `json:"password" validate:"required,min=6" bson:"password"`
	CreatedAt    time.Time    `json:"created_at" bson:"created_at"`
	Role         string       `json:"role" bson:"role" validate:"required"`
	Schedule     []Workout    `json:"schedule" bson:"schedule"`
	Subscription Subscription `json:"subscription"  validate:"required" bson:"subscription"`
}

func (u User) Validate() error {
	validate := validator.New()
	return validate.Struct(u)
}
