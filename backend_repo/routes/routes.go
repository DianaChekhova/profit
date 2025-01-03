package routes

import (
	"context"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/swaggo/http-swagger"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"profit/db"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
	"profit/routes/auth/protection"
	"profit/routes/handlers"
)

func InitRoutes(database *mongo.Database, ctx context.Context) *chi.Mux {
	if err := db.EnsureIndexes(database.Collection("users")); err != nil {
		log.Fatalf("Ошибка создания индекса: %v", err)
	}

	r := chi.NewRouter()

	// Middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Get("/swagger/*", httpSwagger.Handler())
	// Инициализация хендлеров
	adminRepo := mongoDriver.NewAdminMongoRepository(database, ctx)

	adminHandler := handlers.NewAdminCaseController(adminRepo)
	// Открытые маршруты
	r.Post("/api/login", adminHandler.LoginHandler)
	r.Post("/api/register", adminHandler.RegisterHandler)

	// Защищенные маршруты
	r.Group(func(protected chi.Router) {
		protected.Use(protection.RoleMiddleware("admin"))

		//protected.Get("/api/profile", adminHandler.GetProfile)
	})

	return r
}
