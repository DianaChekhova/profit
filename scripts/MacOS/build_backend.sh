#!/bin/bash

echo "Starting backend build process..."

# Переход в директорию backend_repo
cd "../../backend_repo" || {
    echo "[ERROR] Unable to navigate to backend_repo. Check the directory structure."
    exit 1
}

# Проверяем наличие Go
if ! command -v go &>/dev/null; then
    echo "[ERROR] Go is not installed or not in PATH. Please install Go manually."
    exit 1
fi

# Проверяем наличие .env файла
if [ ! -f "config/main.env" ]; then
    echo "[ERROR] .env file not found in backend_repo/config directory!"
    exit 1
fi

# Загружаем переменные окружения из .env
echo "Loading environment variables from .env..."
set -a
source config/main.env
set +a

# Устанавливаем зависимости из go.mod
echo "Installing Go dependencies..."
if ! go mod tidy; then
    echo "[ERROR] Failed to install Go dependencies."
    exit 1
fi

# Компилируем проект
echo "Building the backend..."
if ! go build -o backend main.go; then
    echo "[ERROR] Failed to build the backend."
    exit 1
fi

echo "Backend build completed successfully!"
