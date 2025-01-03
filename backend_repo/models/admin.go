package models

import "github.com/go-playground/validator/v10"

type Admin struct {
	ID       string `json:"id,omitempty" bson:"_id,omitempty"`
	Name     string `json:"name"validate:"required,min=3,max=20" bson:"name"`
	Email    string `json:"email"  validate:"required,email" bson:"email"`
	Password string `json:"password" validate:"required,min=6" bson:"password"`
}

func (admin *Admin) Validate() error {
	validate := validator.New()
	return validate.Struct(admin)
}
