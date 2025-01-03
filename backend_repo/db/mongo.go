package db

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	log "profit/object_log"
	"time"
)

type MongoClient struct {
	Client *mongo.Client
	DB     *mongo.Database
}

var mongoInstance *MongoClient

// ConnectMongoDB устанавливает подключение к MongoDB.
func ConnectMongoDB(uri string, dbName string) (*MongoClient, error) {
	if mongoInstance != nil {
		return mongoInstance, nil // Возвращаем существующий экземпляр (синглтон)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	clientOptions := options.Client().ApplyURI(uri) // TODO: вынести в константы

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Logger.Errorf("Failed to connect to MongoDB: %v", err)
		cancel() // Завершаем контекст в случае ошибки
		return nil, err
	}

	// Проверяем подключение
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Logger.Errorf("Failed to ping MongoDB: %v", err)
		cancel() // Завершаем контекст в случае ошибки
		return nil, err
	}

	log.Logger.Println("Successfully connected to MongoDB")

	// Инициализируем базу данных
	mongoInstance = &MongoClient{
		Client: client,
		DB:     client.Database(dbName),
	}

	return mongoInstance, nil
}

// DisconnectMongoDB закрывает подключение к MongoDB.
func (m *MongoClient) DisconnectMongoDB(ctx context.Context) {
	if err := m.Client.Disconnect(ctx); err != nil {
		log.Logger.Errorf("Failed to disconnect from MongoDB: %v", err)
	}
	log.Logger.Println("Successfully disconnected from MongoDB")
}

// EnsureIndexes создает уникальный индекс для поля username
func EnsureIndexes(collection *mongo.Collection) error {
	indexModel := mongo.IndexModel{
		Keys: bson.D{
			{Key: "email", Value: 1}},
		Options: options.Index().SetUnique(true), // Уникальность
	}

	// Создаем индекс
	_, err := collection.Indexes().CreateOne(context.TODO(), indexModel)
	if err != nil {
		log.Logger.Printf("Не удалось создать уникальный индекс: %v", err)
		return err
	}

	log.Logger.Println("Уникальный индекс успешно создан")
	return nil
}
