package models

type Trainer struct {
	ID        string
	Name      string
	Email     string
	Specialty string
	Password  string
	Schedule  []Workout
}
