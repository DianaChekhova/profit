#!/bin/bash

echo "Starting servers..."

# Переход в директорию backend_repo и запуск backend
echo "Starting backend server..."
cd "$(dirname "$0")/../backend_repo" || {
    echo "[ERROR] Unable to navigate to backend_repo. Check the directory structure."
    exit 1
}

if [ ! -f "backend" ]; then
    echo "[ERROR] Backend executable not found. Build it first!"
    exit 1
fi

# Запускаем сервер в фоне
nohup ./backend > backend.log 2>&1 &
BACKEND_PID=$!
echo "Backend server started with PID $BACKEND_PID."

# Переход в директорию frontend_repo и запуск frontend
echo "Starting frontend server..."
cd "$(dirname "$0")/../frontend_repo" || {
    echo "[ERROR] Unable to navigate to frontend_repo. Check the directory structure."
    exit 1
}

if ! command -v yarn &>/dev/null; then
    echo "[ERROR] Yarn is not installed. Please install it first."
    exit 1
fi

# Запускаем сервер разработки
nohup yarn start > frontend.log 2>&1 &
FRONTEND_PID=$!
echo "Frontend server started with PID $FRONTEND_PID."

# Сохраняем PIDs в файл для последующей остановки
echo "$BACKEND_PID" > ../server_pids.txt
echo "$FRONTEND_PID" >> ../server_pids.txt

echo "Servers started successfully!"
