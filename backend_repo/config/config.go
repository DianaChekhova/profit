package config

import "os"

type Config struct {
	MongoURI   string
	ServerPort string
}

func Load() Config {
	return Config{
		MongoURI:   getEnv("MONGO_URI", "mongodb://localhost:27017"),
		ServerPort: getEnv("SERVER_PORT", "8081"),
	}
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
