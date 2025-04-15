#!/bin/bash

echo "Starting frontend build process..."

# Переход в директорию frontend_repo
cd "../../frontend_repo" || {
    echo "[ERROR] Unable to navigate to frontend_repo. Check the directory structure."
    exit 1
}

# Проверяем наличие Node.js
if ! command -v node &>/dev/null; then
    echo "[ERROR] Node.js is not installed. Please install Node.js manually."
    exit 1
fi

# Проверяем наличие Yarn
if ! command -v yarn &>/dev/null; then
    echo "[INFO] Yarn is not installed. Installing Yarn..."
    if ! npm install -g yarn; then
        echo "[ERROR] Failed to install Yarn. Please install it manually."
        exit 1
    fi
fi

# Устанавливаем зависимости
echo "Installing frontend dependencies..."
if ! yarn install; then
    echo "[ERROR] Failed to install frontend dependencies."
    exit 1
fi

# Сборка проекта
echo "Building the frontend..."
if ! yarn build; then
    echo "[ERROR] Failed to build the frontend."
    exit 1
fi

echo "Frontend build completed successfully!"
