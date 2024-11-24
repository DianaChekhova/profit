package main

import (
	"context"
	"net/http"
	"profit/db"
	"profit/logs"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories"
	"profit/routes"
)

func main() {
	// Первым делом инициализируем логирование:
	ctx := context.Background()
	logs.Init()
	mongoClient := db.ConnectMongoDB("https://localhost:8080", "members ")
	mongoUserRepository := dbs_repositories.NewUserMongoRepository(mongoClient.DB, ctx)
	// Создание хендлеров, передаем репозитории в них
	memoryRepo := use_cases.NewUserMemoryRepository()
	useCasesController := routes.NewUseCasesControllers(mongoUserRepository, memoryRepo)
	// Обработчик для главной страницы
	http.HandleFunc("/api/register", useCasesController.RegisterHandler)
}
