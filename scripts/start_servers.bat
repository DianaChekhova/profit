@echo off
echo Starting backend and frontend servers in separate consoles...

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

:: Переход в директорию frontend_repo и запуск фронтенд сервера в новой консоли
cd /d "%~dp0\..\frontend_repo"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Unable to navigate to frontend_repo. Check the directory structure.
    exit /b 1
)

start "Frontend Server" cmd /k "yarn start"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to start frontend server.
    exit /b 1
)
cd /d "%SCRIPT_DIR%"

echo Servers started successfully in separate consoles!
exit /b 0