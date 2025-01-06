package admin_handlers

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
)

type AdminController struct {
	adminRepo use_cases.AdminRepository
}

func NewAdminController(ctx context.Context, database *mongo.Database) *AdminController {
	return &AdminController{
		adminRepo: mongoDriver.NewAdminMongoRepository(database, ctx),
	}
}
