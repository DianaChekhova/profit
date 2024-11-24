package cfg

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

var (
	MongoUri   string
	ServerPort string
)

func init() {
	err := godotenv.Load("config/main.env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// Читаем конфигурацию из окружения
	MongoUri = os.Getenv("MONGO_URI")
	if MongoUri == "" {
		MongoUri = "mongodb://localhost" // Значение по умолчанию
	}

	ServerPort = os.Getenv("SERVER_PORT")
	if MongoUri == "" {
		ServerPort = "27017" // Значение по умолчанию
	}
}
