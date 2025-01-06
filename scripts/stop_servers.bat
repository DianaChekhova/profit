@echo off
echo Stopping backend and frontend servers...

:: Останавливаем backend.exe
echo Stopping backend server...
taskkill /F /IM backend.exe >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Backend server stopped successfully.
) else (
    echo [WARNING] Backend server was not running or could not be stopped.
)

:: Останавливаем процесс yarn
echo Stopping frontend server...
taskkill /F /IM node.exe >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Frontend server stopped successfully.
) else (
    echo [WARNING] Frontend server was not running or could not be stopped.
)

echo All servers stopped!
exit /b 0