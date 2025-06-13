package models

type Trainer struct {
	ID        string     `json:"id" bson:"_id,omitempty"`
	Name      string     `json:"name" bson:"name"`
	Email     string     `json:"email" bson:"email"`
	Specialty string     `json:"specialty" bson:"specialty"`
	Password  string     `json:"password" bson:"password"`
	BirtDate  string     `json:"birth" bson:"birth"`
	Status    string     `json:"status" bson:"status"`
	Passport  string     `json:"passport" bson:"passport"`
	Address   string     `json:"address" bson:"address"`
	Schedule  []Schedule `json:"schedule" bson:"schedule"`
}
