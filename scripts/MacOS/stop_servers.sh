#!/bin/bash

echo "Stopping servers..."

# Get the absolute path to the project root
PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
echo "Project root: $PROJECT_ROOT"

# Проверяем наличие файла с PID
PID_FILE="$PROJECT_ROOT/server_pids.txt"
if [ ! -f "$PID_FILE" ]; then
    echo "[ERROR] PID file not found. Are the servers running?"
    exit 1
fi

# Останавливаем процессы по PID
while read -r PID; do
    if kill -0 "$PID" &>/dev/null; then
        echo "Stopping process with PID $PID..."
        kill "$PID"
        # Wait for process to stop
        for i in {1..5}; do
            if ! kill -0 "$PID" &>/dev/null; then
                echo "Process $PID stopped successfully."
                break
            fi
            sleep 1
        done
        # Force kill if still running
        if kill -0 "$PID" &>/dev/null; then
            echo "Force killing process $PID..."
            kill -9 "$PID"
        fi
    else
        echo "Process with PID $PID not found or already stopped."
    fi
done < "$PID_FILE"

# Cleanup
echo "Cleaning up..."
rm -f "$PID_FILE"
rm -f "$PROJECT_ROOT/logs/backend.log"
rm -f "$PROJECT_ROOT/logs/frontend.log"

echo "All servers stopped and cleaned up."
