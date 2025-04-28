package models

type Trainer struct {
	ID        string     `json:"id" bson:"_id"`
	Name      string     `json:"name" bson:"name"`
	Email     string     `json:"email" bson:"email"`
	Specialty string     `json:"specialty" bson:"specialty"`
	Password  string     `json:"password" bson:"password"`
	Schedule  []Schedule `json:"schedule" bson:"schedule"`
}
