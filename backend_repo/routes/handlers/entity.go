package handlers

import (
	"profit/repository/use_cases"
)

type AdminCaseController struct {
	adminRepo     use_cases.AdminRepository
	superUserRepo use_cases.SuperUserRepo
}

func NewAdminCaseController(dbRepo use_cases.AdminRepository) *AdminCaseController {
	return &AdminCaseController{
		adminRepo: dbRepo,
	}
}
