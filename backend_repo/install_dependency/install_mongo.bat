@echo off
echo Checking if MongoDB is installed...

:: Проверяем, установлен ли MongoDB
where mongod >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo MongoDB is not installed. Installing MongoDB...

    :: Устанавливаем URL для загрузки MongoDB
    set MONGO_URL=https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.9-signed.msi
    set MONGO_INSTALLER=mongodb-installer.msi

    :: Загружаем MongoDB
    echo Downloading MongoDB from %MONGO_URL%...
    powershell -Command "Invoke-WebRequest -Uri '%MONGO_URL%' -OutFile '%MONGO_INSTALLER%'"
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to download MongoDB installer.
        exit /b 1
    )

    :: Устанавливаем MongoDB
    echo Installing MongoDB...
    msiexec /i %MONGO_INSTALLER% /quiet /norestart
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] MongoDB installation failed.
        exit /b %ERRORLEVEL%
    )
    echo MongoDB installed successfully.

    :: Удаляем установочный файл после установки
    del /q %MONGO_INSTALLER%
) else (
    echo MongoDB is already installed.
)

:: Проверяем, запущен ли процесс MongoDB
echo Checking if MongoDB process is running...
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I "mongod.exe" >NUL
if %ERRORLEVEL% EQU 0 (
    echo MongoDB is already running. Skipping start command.
) else (
    echo Starting MongoDB...

    :: Убедимся, что директория для базы данных существует
    if not exist "C:\data\db" (
        mkdir "C:\data\db"
    )

    :: Запускаем MongoDB без вывода логов
    start /B mongod --dbpath "C:\data\db" >nul 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to start MongoDB.
        exit /b %ERRORLEVEL%
    )
    echo MongoDB started successfully.
)

echo MongoDB installation and setup complete.
exit /b 0
