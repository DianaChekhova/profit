package models

import (
	"time"
)

type Workout struct {
	ID              string    `json:"id,omitempty" bson:"id,omitempty"`
	Title           string    `json:"title" validate:"required,min=3,max=20" bson:"title"`
	Description     string    `json:"description" validate:"required,min=3,max=20" bson:"description"`
	StartTime       time.Time `json:"start_time" bson:"start_time"`
	EndTime         time.Time `json:"end_time" bson:"end_time"`
	MaxParticipants int       `json:"max_participants" validate:"required" bson:"max_participants"`
	MinParticipants int       `json:"min_participants" validate:"required" bson:"min_participants"`
	Participants    map[string]string
	IsEnable        bool
}
