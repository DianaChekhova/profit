package main

import (
	"context"
	"fmt"
	"net/http"
	"profit/config"
	"profit/db"
	log "profit/object_log"
	"profit/routes"
)

func main() {
	// Инициализируем логирование
	log.Init()

	// Загружаем
	config.Load()

	// Подключаемся к базе данных
	mongoClient, ctx := initDatabase()

	// Создаем маршруты
	router := routes.InitRoutes(mongoClient.DB, ctx)

	// Запускаем HTTP-сервер
	fmt.Println("Starting server on", config.Conf.ServerPort)
	fmt.Println(http.ListenAndServe(fmt.Sprintf("localhost:%s", config.Conf.ServerPort), router))
}

func initDatabase() (*db.MongoClient, context.Context) {
	ctx := context.Background()
	mongoClient, err := db.ConnectMongoDB(config.Conf.MongoURI, "members")
	if err != nil {
		log.Logger.Fatal(err)
	}
	return mongoClient, ctx
}
