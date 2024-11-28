package routes

import (
	"profit/repository/use_cases"
)

type UseCaseController struct {
	userDbRepo use_cases.UserRepository
}

func NewUseCasesControllers(dbRepo use_cases.UserRepository) *UseCaseController {
	return &UseCaseController{
		userDbRepo: dbRepo,
	}
}
