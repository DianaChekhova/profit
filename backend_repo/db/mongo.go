package db

import (
	"context"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	log "profit/logs"
	"time"
)

type MongoClient struct {
	Client *mongo.Client
	DB     *mongo.Database
}

var mongoInstance *MongoClient

// ConnectMongoDB устанавливает подключение к MongoDB.
func ConnectMongoDB(uri string, dbName string) *MongoClient {
	if mongoInstance != nil {
		return mongoInstance // Возвращаем существующий экземпляр (синглтон)
	}
	// Настраиваем контекст
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	clientOptions := options.Client().ApplyURI(uri) //todo вынести в константы

	client, err := mongo.Connect(clientOptions)
	if err != nil {
		log.Logger.Errorf("Failed to create MongoDB client: %v", err)
	}

	// Проверяем подключение
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Logger.Errorf("Failed to ping MongoDB: %v", err)
	}

	log.Logger.Println("Successfully connected to MongoDB")

	// Инициализируем базу данных
	mongoInstance = &MongoClient{
		Client: client,
		DB:     client.Database(dbName),
	}
	return mongoInstance
}

// DisconnectMongoDB закрывает подключение к MongoDB.
func (m *MongoClient) DisconnectMongoDB(ctx context.Context) {
	if err := m.Client.Disconnect(ctx); err != nil {
		log.Logger.Errorf("Failed to disconnect from MongoDB: %v", err)
	}
	log.Logger.Println("Successfully disconnected from MongoDB")
}
