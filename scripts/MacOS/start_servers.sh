#!/bin/bash

echo "Starting servers..."

# Check if MongoDB is running
if ! brew services list | grep -q "mongodb-community.*started"; then
    echo "[ERROR] MongoDB is not running. Please start it first using: brew services start mongodb/brew/mongodb-community"
    exit 1
fi

# Get the absolute path to the project root
PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
echo "Project root: $PROJECT_ROOT"

# Create logs directory if it doesn't exist
mkdir -p "$PROJECT_ROOT/logs"

# Переход в директорию backend_repo и запуск backend
echo "Starting backend server..."
cd "$PROJECT_ROOT/backend_repo" || {
    echo "[ERROR] Unable to navigate to backend_repo. Check the directory structure."
    exit 1
}

if [ ! -f "backend" ]; then
    echo "[ERROR] Backend executable not found. Build it first!"
    exit 1
fi

# Check for environment file
if [ ! -f "config/main.env" ]; then
    echo "[ERROR] Environment file not found at config/main.env"
    exit 1
fi

# Load environment variables
set -a
source config/main.env
set +a

# Запускаем сервер в фоне
nohup ./backend > "$PROJECT_ROOT/logs/backend.log" 2>&1 &
BACKEND_PID=$!
echo "Backend server started with PID $BACKEND_PID."

# Переход в директорию frontend_repo и запуск frontend
echo "Starting frontend server..."
cd "$PROJECT_ROOT/frontend_repo" || {
    echo "[ERROR] Unable to navigate to frontend_repo. Check the directory structure."
    exit 1
}

if ! command -v yarn &>/dev/null; then
    echo "[ERROR] Yarn is not installed. Please install it first."
    exit 1
fi

# Check for environment file
if [ ! -f ".env" ]; then
    echo "[WARNING] .env file not found in frontend directory. Using default configuration."
fi

# Запускаем сервер разработки
nohup yarn start > "$PROJECT_ROOT/logs/frontend.log" 2>&1 &
FRONTEND_PID=$!
echo "Frontend server started with PID $FRONTEND_PID."

# Сохраняем PIDs в файл для последующей остановки
echo "$BACKEND_PID" > "$PROJECT_ROOT/server_pids.txt"
echo "$FRONTEND_PID" >> "$PROJECT_ROOT/server_pids.txt"

echo "Servers started successfully!"
echo "Backend logs: $PROJECT_ROOT/logs/backend.log"
echo "Frontend logs: $PROJECT_ROOT/logs/frontend.log"
