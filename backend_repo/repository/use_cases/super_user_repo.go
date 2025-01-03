package use_cases

import (
	"context"
	"profit/models"
)

type SuperUserRepo interface {
	AdminHandlerRepo
}

type AdminHandlerRepo interface {
	CreateAdmin(ctx context.Context, admin models.Admin) error
	DeleteAdminByID(ctx context.Context, id string) error
	GetAdminByEmail(ctx context.Context, email string) (*models.Admin, error)
	AdminList(ctx context.Context) ([]models.Admin, error)
}
