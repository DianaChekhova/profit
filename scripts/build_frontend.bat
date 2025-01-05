@echo off
echo Starting frontend build process...

:: Переход в директорию frontend_repo
cd /d "%~dp0\..\frontend_repo"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Unable to navigate to frontend_repo. Check the directory structure.
    exit /b 1
)

:: Проверяем наличие Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Node.js is not installed. Please install Node.js manually.
    exit /b 1
)

:: Проверяем наличие Yarn
where yarn >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Yarn is not installed. Installing Yarn...
    npm install -g yarn
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install Yarn. Please install it manually.
        exit /b 1
    )
)

:: Устанавливаем зависимости
echo Installing frontend dependencies...
yarn install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install frontend dependencies.
    exit /b 1
)

:: Сборка проекта
echo Building the frontend...
yarn build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to build the frontend.
    exit /b 1
)

echo Frontend build completed successfully!
exit /b 0