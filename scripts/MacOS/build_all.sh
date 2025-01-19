#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install Homebrew if not installed
install_homebrew() {
    if ! command_exists brew; then
        echo "Homebrew не установлен. Устанавливаем..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$($(brew --prefix)/bin/brew shellenv)"
    else
        echo "Homebrew уже установлен."
    fi
}

# Function to install Node.js and npm
install_node() {
    if ! command_exists node; then
        echo "Node.js не установлен. Устанавливаем..."
        brew install node
    else
        echo "Node.js уже установлен."
    fi
}

# Function to install Yarn
install_yarn() {
    if ! command_exists yarn; then
        echo "Yarn не установлен. Устанавливаем..."
        npm install -g yarn
    else
        echo "Yarn уже установлен."
    fi
}

# Function to install MongoDB
install_mongodb() {
    if ! brew list | grep -q mongodb-community; then
        echo "MongoDB не установлен. Устанавливаем..."
        brew tap mongodb/brew
        brew install mongodb-community@7.0
    else
        echo "MongoDB уже установлен."
    fi
}

# Function to start MongoDB
start_mongodb() {
    echo "Запускаем MongoDB..."
    brew services start mongodb/brew/mongodb-community
}

# Main build script
main() {
    echo "Проверяем и устанавливаем зависимости..."
    install_homebrew
    install_node
    install_yarn
    install_mongodb

    echo "Собираем проект..."
    ./build_backend.sh
    ./build_frontend.sh

    echo "Запускаем серверы..."
    ./start_servers.sh

    echo "Проект успешно собран и запущен!"
}

main
