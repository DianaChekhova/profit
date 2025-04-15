@echo off
echo [Raxat Lukin MOD] Starting only backend in separate consoles...

set SCRIPT_DIR=%~dp0
:: Переход в директорию backend_repo и запуск бэкенда в новой консоли
cd /d "%~dp0\..\backend_repo"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Unable to navigate to backend_repo. Check the directory structure.
    exit /b 1
)
start "Backend Server" cmd /k "backend.exe"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to start backend server.
    exit /b 1
)
