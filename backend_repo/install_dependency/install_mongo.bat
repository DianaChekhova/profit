@echo off
echo Checking if MongoDB is installed...

:: Проверяем, установлен ли MongoDB
where mongod >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo MongoDB is not installed. Installing MongoDB...
    :: Скачиваем MongoDB
    set MONGO_URL=https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.9-signed.msi
    set MONGO_INSTALLER=mongodb-installer.msi
    echo Downloading MongoDB...
    powershell -Command "Invoke-WebRequest -Uri %MONGO_URL% -OutFile %MONGO_INSTALLER%"
    echo Installing MongoDB...
    msiexec /i %MONGO_INSTALLER% /quiet /norestart
    if %ERRORLEVEL% NEQ 0 (
        echo MongoDB installation failed.
        exit /b %ERRORLEVEL%
    )
    echo MongoDB installed successfully.
) else (
    echo MongoDB is already installed.
)

:: Проверяем, запущен ли процесс mongod
echo Checking if MongoDB process is running...
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I "mongod.exe" >NUL
if %ERRORLEVEL% EQU 0 (
    echo MongoDB is already running. Skipping start command.
) else (
    echo Starting MongoDB...
    start /B mongod --dbpath "C:\data\db" >nul 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to start MongoDB.
        exit /b %ERRORLEVEL%
    )
    echo MongoDB started successfully.
)

echo MongoDB installation and setup complete.
exit /b 0
