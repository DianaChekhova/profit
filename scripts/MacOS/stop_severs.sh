#!/bin/bash

echo "Stopping servers..."

# Проверяем наличие файла с PID
PID_FILE="$(dirname "$0")/../server_pids.txt"
if [ ! -f "$PID_FILE" ]; then
    echo "[ERROR] PID file not found. Are the servers running?"
    exit 1
fi

# Останавливаем процессы по PID
while read -r PID; do
    if kill -0 "$PID" &>/dev/null; then
        echo "Stopping process with PID $PID..."
        kill "$PID"
        echo "Process $PID stopped."
    else
        echo "Process with PID $PID not found or already stopped."
    fi
done < "$PID_FILE"

# Удаляем PID файл
rm -f "$PID_FILE"
echo "All servers stopped."
