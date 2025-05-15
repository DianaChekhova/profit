package routes

import (
	"context"
	"fmt"
	"net/http"
	"profit/routes/handlers/base_handlers"
	"profit/routes/handlers/guests"
	"profit/routes/handlers/subscription_handler"
	"profit/routes/handlers/trainer_handlers"
	"profit/routes/handlers/user_handler"
	"profit/routes/middleware"

	"github.com/go-chi/chi/v5"
	chimiddleware "github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"go.mongodb.org/mongo-driver/mongo"

	httpSwagger "github.com/swaggo/http-swagger"
)

// @title Fitness Club API
// @version 1.0
// @description API для управления фитнес-клубом
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /
// @schemes http https

// @securityDefinitions.apikey bearerAuth
// @in header
// @name Authorization
// @description Type "Bearer" followed by a space and JWT token.
func InitRoutes(db *mongo.Database, ctx context.Context) http.Handler {
	r := chi.NewRouter()

	// Middleware
	r.Use(chimiddleware.Recoverer)
	r.Use(chimiddleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300,
	}))
	r.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			fmt.Println("ROUTE:", r.Method, r.URL.Path)
			next.ServeHTTP(w, r)
		})
	})

	// Swagger UI
	r.Get("/swagger/*", httpSwagger.Handler(
		httpSwagger.URL("http://localhost:8080/swagger/doc.json"),
		httpSwagger.DeepLinking(true),
	))

	// Controllers
	baseController := base_handlers.NewBaseController(ctx, db)
	userController := user_handler.NewUserController(ctx, db)
	trainerController := trainer_handlers.NewTrainerController(ctx, db)
	subscriptionController := subscription_handler.NewSubscriptionController(ctx, db)
	guestController := guests.NewGuestsController(ctx, db)

	// Public routes
	r.Group(func(r chi.Router) {
		r.Post("/login", baseController.LoginHandler)
		r.Post("/register", baseController.RegisterHandler)
		r.Route("/guest", func(r chi.Router) {
			r.Post("/suggestion", guestController.SaveSuggestion)

		})
	})
	// Protected routes
	r.Group(func(r chi.Router) {
		r.Use(middleware.AuthMiddleware)
		r.Get("/me", baseController.Me)

		// User routes
		r.Route("/users", func(r chi.Router) {
			r.Use(middleware.AdminMiddleware)
			r.Get("/", userController.UserList)

			r.Get("/{id}", userController.GetUser)
			r.Delete("/{id}", userController.DeleteUser)

			r.Put("/{id}/status", userController.UpdateUserStatus)
			r.Put("/{id}", userController.AddUser)
		})

		r.Route("/admin", func(r chi.Router) {
			r.Use(middleware.AdminMiddleware)

			r.Get("/trainers", trainerController.TrainerList)
			r.Post("/trainer", trainerController.AddTrainer)
			r.Put("/trainer/{id}", trainerController.TrainerUpdate)
			r.Delete("/trainer/{id}", trainerController.TrainerDelete)

			r.Put("/user/{id}", userController.UserUpdate)
			r.Post("/user", userController.AddUser)
		})

		// Trainer routes
		r.Route("/trainer", func(r chi.Router) {
			r.Use(middleware.TrainerMiddleware)

			r.Get("/schedule/personal", trainerController.GetPersonalSchedule)
			r.Put("/schedule/personal/{id}", trainerController.UpdatePersonalSession)
			r.Get("/schedule/group", trainerController.GetTrainerGroupSchedule)
		})

		// Subscription routes
		r.Route("/subscription", func(r chi.Router) {
			r.Get("/membership", subscriptionController.GetMembership)
			r.Post("/membership", subscriptionController.CreateMembership)
			r.Post("/membership/freeze", subscriptionController.FreezeMembership)

			r.Route("/group", func(r chi.Router) {
				r.Get("/schedule", subscriptionController.GetGroupSchedule)
				r.Post("/schedule", subscriptionController.CreateGroupSession)
				r.Put("/schedule/{id}", subscriptionController.UpdateGroupSession)
				r.Delete("/schedule/{id}", subscriptionController.DeleteGroupSession)
				r.Post("/schedule/{id}/register", subscriptionController.RegisterForGroupSession)
				r.Delete("/schedule/{id}/register", subscriptionController.UnregisterFromGroupSession)
			})

			r.Route("/personal", func(r chi.Router) {
				r.Use(middleware.AdminMiddleware)
				r.Get("/schedule", subscriptionController.GetPersonalSchedule)
				r.Post("/schedule/{id}/register", subscriptionController.RegisterForPersonalSession)
				r.Delete("/schedule/{id}/register", subscriptionController.UnregisterFromPersonalSession)
			})
		})
		r.Route("/suggestion", func(r chi.Router) {
			r.Use(middleware.AdminMiddleware)
			r.Get("/", guestController.GetSuggestions)
			r.Put("/status", guestController.ChangeSuggestionActivity)
			r.Delete("/{id}", guestController.DeleteSuggestion)
		})
	})

	return r
}
