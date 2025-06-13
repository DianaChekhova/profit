package models

import (
	"time"
)

type Schedule struct {
	ID              string    `json:"id,omitempty" bson:"id,omitempty"`
	Title           string    `json:"title" validate:"required,min=3,max=20" bson:"title"`
	Description     string    `json:"description" validate:"required,min=3,max=20" bson:"description"`
	Time            string    `json:"time"  bson:"time"`
	StartTime       time.Time `json:"start_time" bson:"start_time"`
	EndTime         time.Time `json:"end_time" bson:"end_time"`
	MaxParticipants int       `json:"max_participants" validate:"required" bson:"max_participants"`
	MinParticipants int       `json:"min_participants" validate:"required" bson:"min_participants"`
	TrainersIDs     []string  `json:"trainers_ids" bson:"trainers_ids"`
	UsersIDS        []string  `json:"users_ids" bson:"users_ids"`
	IsEnable        bool
}
