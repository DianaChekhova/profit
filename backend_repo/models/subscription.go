package models

import "time"

type Subscription struct {
	ID       string        `json:"id" bson:"_id"`
	Type     string        `json:"type" bson:"type"`
	Price    float64       `json:"price" bson:"price"`
	Duration time.Duration `json:"duration" bson:"duration"`
}
