package main

import (
	"context"
	"net/http"
	"profit/config"
	"profit/db"
	log "profit/object_log"
	"profit/routes"
)

func main() {
	// Инициализируем логирование
	log.Init()

	// Загружаем конфигурацию
	cfg := config.Load()

	// Подключаемся к базе данных
	mongoClient, ctx := initDatabase(cfg)

	// Создаем маршруты
	router := routes.InitRoutes(mongoClient.DB, ctx)

	// Запускаем HTTP-сервер
	log.Logger.Println("Starting server on", cfg.ServerPort)
	log.Logger.Println(http.ListenAndServe(cfg.ServerPort, router))
}

func initDatabase(cfg config.Config) (*db.MongoClient, context.Context) {
	ctx := context.Background()
	mongoClient, err := db.ConnectMongoDB(cfg.MongoURI, "members")
	if err != nil {
		log.Logger.Fatal(err)
	}
	return mongoClient, ctx
}
