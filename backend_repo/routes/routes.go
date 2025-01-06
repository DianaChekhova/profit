package routes

import (
	"context"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/swaggo/http-swagger"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"net/http"
	"profit/db"
	"profit/routes/auth/protection"
	"profit/routes/handlers/base_handlers"
	"profit/routes/handlers/trainer_handlers"
	"profit/routes/handlers/user_handler"
)

func InitRoutes(database *mongo.Database, ctx context.Context) *chi.Mux {
	if err := db.EnsureIndexes(database.Collection("users")); err != nil {
		log.Fatalf("Ошибка создания индекса: %v", err)
	}

	r := chi.NewRouter()

	// Middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(CORS)
	r.Get("/swagger/*", httpSwagger.Handler())
	// Инициализация хендлеров

	baseController := base_handlers.NewBaseController(ctx, database)
	userController := user_handler.NewUserController(ctx, database)
	trainerController := trainer_handlers.NewTrainerController(ctx, database)
	//subController := subscription_handler.NewSubscriptionController(ctx, database)
	// Открытые маршруты
	r.Post("/api/login", baseController.LoginHandler)
	r.Post("/api/register", baseController.RegisterHandler)

	// Защищенные маршруты
	r.Group(func(protected chi.Router) {
		protected.Use(protection.RoleMiddleware("admin"))

		protected.Get("/api/trainer", trainerController.TrainerList)
		protected.Put("/api/trainer", trainerController.TrainerUpdate)
		protected.Delete("api/trainer", trainerController.TrainerDelete)
		protected.Post("api/trainer", trainerController.AddTrainer)

		protected.Get("/api/user", userController.UserList)
		protected.Put("/api/user", userController.UserUpdate)
		protected.Delete("/api/user", userController.UserDelete)
		protected.Post("/api/trainer", userController.AddUser)
		//protected.Get("/api/profile", baseController.GetProfile)
	})

	return r
}

func CORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173") // Точный источник
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Credentials", "true") // Важный заголовок для withCredentials

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
