package docs

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
func InitSwagger() {
	// No need to register manually, swag will handle this automatically
	// when swag init is run
}
