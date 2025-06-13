package models

type Subscription struct {
	ID       string  `json:"id" bson:"_id"`
	Type     string  `json:"type" bson:"type"`
	Price    float64 `json:"price" bson:"price"`
	Duration float64 `json:"duration" bson:"duration"`
	Status   Status  `json:"status" bson:"status"`
}

type Status = string

const (
	Active   Status = "active"
	Inactive Status = "inactive"
)
