package object_log

import (
	"github.com/sirupsen/logrus"
	"os"
	"sync"
)

var (
	Logger *logrus.Logger // Экспортируемый глобальный логгер
	once   sync.Once
)

func initLogger() {
	logger := logrus.New()

	// Настройка вывода в файл
	file, err := os.OpenFile("app.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		logrus.Fatal("Не удалось открыть файл для логирования:", err)
	}
	logger.SetOutput(file)

	// Настройка формата логирования
	logger.SetFormatter(&logrus.TextFormatter{
		FullTimestamp: true,
	})

	// Уровень логирования
	logger.SetLevel(logrus.InfoLevel)

	Logger = logger
}

// Init инициализирует глобальный логгер (выполняется только один раз)
func Init() {
	once.Do(initLogger)
}
