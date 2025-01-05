@echo off
echo Starting full build process...

:: Сохраняем текущую директорию (scripts)
set SCRIPT_DIR=%~dp0

:: Сборка фронтенда
call "%SCRIPT_DIR%build_frontend.bat"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Frontend build failed.
    exit /b 1
)

:: Сборка бэкенда
call "%SCRIPT_DIR%build_backend.bat"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Backend build failed.
    exit /b 1
)

:: Возвращаемся в папку scripts
cd /d "%SCRIPT_DIR%"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to return to the scripts directory.
    exit /b 1
)

echo Full build process completed successfully!
exit /b 0