package models

type Trainer struct {
	ID        string     `json:"id,omitempty" bson:"id"`
	Name      string     `json:"name,omitempty" bson:"name"`
	Email     string     `json:"email,omitempty" bson:"email"`
	Specialty string     `json:"specialty,omitempty" bson:"specialty"`
	Password  string     `json:"password,omitempty" bson:"password"`
	Schedule  []Schedule `json:"schedule,omitempty" bson:"schedule"`
}
