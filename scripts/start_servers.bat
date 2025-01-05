@echo off
echo Starting backend and frontend servers...

:: Переход в директорию backend_repo и запуск бэкенда
cd /d "%~dp0\..\backend_repo"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Unable to navigate to backend_repo. Check the directory structure.
    exit /b 1
)
start backend.exe
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to start backend server.
    exit /b 1
)

:: Переход в директорию frontend_repo и запуск фронтенд сервера
cd /d "%~dp0\..\frontend_repo"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Unable to navigate to frontend_repo. Check the directory structure.
    exit /b 1
)
start yarn start
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to start frontend server.
    exit /b 1
)

echo Servers started successfully!
exit /b 0
