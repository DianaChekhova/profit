package models

import (
	"github.com/go-playground/validator/v10"
	"time"
)

// User описывает данные пользователя
// @Description Пользователь системы
type User struct {
	ID           string       `json:"id,omitempty" bson:"id,omitempty" example:"123"`
	UserName     string       `json:"name" validate:"required,min=3,max=20" bson:"name" example:"JohnDoe"`
	Email        string       `json:"email" validate:"required,email" bson:"email" example:"johndoe@example.com"`
	Password     string       `json:"password" validate:"required,min=6" bson:"password" example:"123456"`
	CreatedAt    time.Time    `json:"created_at" bson:"created_at" example:"2023-01-01T12:00:00Z"`
	Role         string       `json:"role" bson:"role" example:"admin"`
	ScheduleIds  []string     `json:"schedule" bson:"schedule"`
	Subscription Subscription `json:"subscription" validate:"required" bson:"subscription"`
	Address      string       `json:"address" bson:"address"`
	BirthDate    string       `json:"birth" bson:"birth"`
	Passport     string       `json:"passport" bson:"passport"`
	Status       string       `json:"status" json:"status"`
}

func (u User) Validate() error {
	validate := validator.New()
	return validate.Struct(u)
}
