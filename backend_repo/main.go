package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"profit/cfg"
	"profit/db"
	"profit/logs"
	"profit/repository/use_cases"
	"profit/repository/use_cases/dbs_repositories"
	"profit/routes"
)

func main() {
	// Инициализируем логирование
	logs.Init()

	// Устанавливаем контекст
	ctx := context.Background()

	// Подключаемся к MongoDB 27017
	mongoClient, err := db.ConnectMongoDB(fmt.Sprintf("%s:%s", cfg.MongoUri, cfg.ServerPort), "members")
	if err != nil {
		logs.Logger.Fatal(err.Error())
	}

	defer func() {
		err := mongoClient.Client.Disconnect(ctx)
		if err != nil {
			logs.Logger.Fatal(err.Error())
		}
	}()

	// Создаем на данный момент две репы. Для работы с юзерами через монгу и через оперативу ( для тестов)
	mongoUserRepository := dbs_repositories.NewUserMongoRepository(mongoClient.DB, ctx)

	memoryRepo := use_cases.NewUserMemoryRepository()

	// Создаем контроллеры
	useCasesController := routes.NewUseCasesControllers(mongoUserRepository, memoryRepo)

	// Регистрируем маршруты
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello Egor Lykov") // Отправляем ответ клиенту
	})
	http.HandleFunc("/api/register", useCasesController.RegisterHandler)

	// Запускаем HTTP-сервер
	logs.Logger.Println("Starting server on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
