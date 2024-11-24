@echo off
echo Starting Go dependencies installation...

:: Переход в директорию backend_repo
cd /d "%~dp0\..\backend_repo"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Unable to navigate to backend_repo. Check the directory structure.
    exit /b 1
)

:: Проверяем наличие .env файла
if not exist config\main.env (
    echo [ERROR] .env file not found in backend_repo\config directory!
    exit /b 1
)

:: Загружаем переменные окружения из .env
echo Loading environment variables from .env...
for /f "usebackq delims=" %%i in (config\main.env) do (
    set %%i
)

:: Проверяем, установлен ли Go
where go >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Go is not installed or not in PATH. Please install Go before proceeding.
    exit /b 1
)

:: Устанавливаем зависимости из go.mod
echo Installing Go dependencies...
go mod tidy
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install Go dependencies.
    exit /b 1
)

:: Компилируем проект
echo Building the project...
go build -o backend.exe main.go
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to build the project.
    exit /b 1
)

:: Запускаем проект
echo Running the project...
start backend.exe

echo All processes completed successfully!
exit /b 0
