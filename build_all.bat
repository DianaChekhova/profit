@echo off
echo Starting all processes...

:: 1. Запускаем скрипт установки MongoDB
echo Running MongoDB installation script...
call backend_repo\install_dependency\install_mongo.bat
if %ERRORLEVEL% NEQ 0 (
    echo MongoDB installation failed. Exiting...
    exit /b %ERRORLEVEL%
)

:: 2. Запускаем сборку и запуск бэкенда
echo Running backend build and run script...
cd -d backend_repo
call  backend_repo\install_golang_dependency.bat
if %ERRORLEVEL% NEQ 0 (
    echo Backend build and run failed. Exiting...
    exit /b %ERRORLEVEL%
)

echo All processes completed successfully!