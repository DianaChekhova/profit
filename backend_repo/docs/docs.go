// Package docs Code generated by swaggo/swag. DO NOT EDIT
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/api/User": {
            "put": {
                "description": "Позволяет обновить информацию о пользователя",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "User"
                ],
                "summary": "Обновляет данные пользователя",
                "parameters": [
                    {
                        "description": "Информация о пользователя для обновления",
                        "name": "User",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/user_handler.userUpdateReq"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Обновление выполнено успешно",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка сервера при обновлении",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "post": {
                "description": "Позволяет добавить нового пользователя в систему",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "User"
                ],
                "summary": "Добавление нового пользователя",
                "parameters": [
                    {
                        "description": "Данные Юзера",
                        "name": "User",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/user_handler.UserResponse"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Пользователь успешно создан",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка при создании пользователя",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "delete": {
                "description": "Удаляет пользователя по его идентификатору",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "User"
                ],
                "summary": "Удаление пользователя",
                "parameters": [
                    {
                        "description": "Идентификатор пользователя для удаления",
                        "name": "id",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/user_handler.userDeleteReq"
                        }
                    }
                ],
                "responses": {
                    "204": {
                        "description": "Тренер успешно удален",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "404": {
                        "description": "Тренер не найден",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка сервера при удалении пользователя",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/api/login": {
            "post": {
                "description": "Позволяет пользователю войти в систему, проверяя имя пользователя и пароль",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Auth"
                ],
                "summary": "Авторизация пользователя",
                "parameters": [
                    {
                        "description": "Данные для входа",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/base_handlers.AuthBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Токен успешной авторизации",
                        "schema": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "401": {
                        "description": "Неверное имя пользователя или пароль",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка генерации токена",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/api/logout": {
            "post": {
                "description": "Позволяет пользователю выйти из системы, делая токен недействительным",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Auth"
                ],
                "summary": "Выход из системы",
                "responses": {
                    "200": {
                        "description": "Выход выполнен успешно",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "401": {
                        "description": "Пользователь не авторизован",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка при обработке запроса",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/api/me": {
            "get": {
                "description": "Возвращает информацию о пользователе на основе его роли (User, Trainer, Admin)",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "User"
                ],
                "summary": "Получить информацию о текущем пользователе",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Bearer токен для аутентификации",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Информация о пользователе",
                        "schema": {
                            "$ref": "#/definitions/base_handlers.MeResponse"
                        }
                    },
                    "400": {
                        "description": "Ошибка: не удалось получить данные из контекста или некорректная роль",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка: внутренняя ошибка сервера",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/api/register": {
            "post": {
                "description": "Регистрирует нового пользователя в системе, создавая учетную запись на основе указанной роли.",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Register"
                ],
                "summary": "Регистрация пользователя",
                "parameters": [
                    {
                        "description": "Данные для регистрации пользователя",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/base_handlers.RegisterBody"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Пользователь успешно зарегистрирован. Возвращает токен и идентификатор пользователя.",
                        "schema": {
                            "$ref": "#/definitions/base_handlers.RegisterResponse"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод данных.",
                        "schema": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "500": {
                        "description": "Ошибка при обработке данных (например, ошибка хэширования пароля).",
                        "schema": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "503": {
                        "description": "Ошибка сервера при регистрации пользователя.",
                        "schema": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        },
        "/api/trainer": {
            "put": {
                "description": "Позволяет обновить информацию о тренере",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Trainers"
                ],
                "summary": "Обновляет данные тренера",
                "parameters": [
                    {
                        "description": "Информация о тренере для обновления",
                        "name": "trainer",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/trainer_handlers.trainerUpdateReq"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Обновление выполнено успешно",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка сервера при обновлении",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "post": {
                "description": "Позволяет добавить нового тренера в систему",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Trainers"
                ],
                "summary": "Добавление нового тренера",
                "parameters": [
                    {
                        "description": "Данные тренера",
                        "name": "trainer",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/trainer_handlers.trainerReqHandler"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Тренер успешно создан",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка при создании тренера",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "delete": {
                "description": "Удаляет тренера по его идентификатору",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Trainers"
                ],
                "summary": "Удаление тренера",
                "parameters": [
                    {
                        "description": "Идентификатор тренера для удаления",
                        "name": "id",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/trainer_handlers.deleteHandler"
                        }
                    }
                ],
                "responses": {
                    "204": {
                        "description": "Тренер успешно удален",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "404": {
                        "description": "Тренер не найден",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка сервера при удалении тренера",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/api/trainers": {
            "get": {
                "description": "Позволяет получить список всех тренеров",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Trainers"
                ],
                "summary": "Возвращает список тренеров",
                "responses": {
                    "200": {
                        "description": "Список тренеров",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/trainer_handlers.trainerAliace"
                            }
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка при получении списка тренеров",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/api/users": {
            "get": {
                "description": "Позволяет получить список всех пользователей",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "User"
                ],
                "summary": "Возвращает список пользователей",
                "responses": {
                    "200": {
                        "description": "Список пользователей",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/user_handler.UserResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Неверный ввод",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Ошибка при получении списка пользователей",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "base_handlers.AuthBody": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "base_handlers.MeResponse": {
            "type": "object",
            "properties": {
                "entity_name": {
                    "type": "string"
                }
            }
        },
        "base_handlers.RegisterBody": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "base_handlers.RegisterResponse": {
            "type": "object",
            "properties": {
                "entity_oid": {
                    "type": "string"
                },
                "token": {
                    "type": "string"
                }
            }
        },
        "models.Schedule": {
            "type": "object",
            "required": [
                "description",
                "max_participants",
                "min_participants",
                "title"
            ],
            "properties": {
                "description": {
                    "type": "string",
                    "maxLength": 20,
                    "minLength": 3
                },
                "end_time": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "isEnable": {
                    "type": "boolean"
                },
                "max_participants": {
                    "type": "integer"
                },
                "min_participants": {
                    "type": "integer"
                },
                "start_time": {
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "maxLength": 20,
                    "minLength": 3
                },
                "trainers_ids": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "users_ids": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            }
        },
        "models.Subscription": {
            "type": "object",
            "properties": {
                "duration": {
                    "type": "number"
                },
                "id": {
                    "type": "string"
                },
                "price": {
                    "type": "number"
                },
                "type": {
                    "type": "string"
                }
            }
        },
        "models.User": {
            "description": "Пользователь системы",
            "type": "object",
            "required": [
                "email",
                "name",
                "password",
                "subscription"
            ],
            "properties": {
                "address": {
                    "type": "string"
                },
                "birth": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string",
                    "example": "2023-01-01T12:00:00Z"
                },
                "email": {
                    "type": "string",
                    "example": "johndoe@example.com"
                },
                "id": {
                    "type": "string",
                    "example": "123"
                },
                "name": {
                    "type": "string",
                    "maxLength": 20,
                    "minLength": 3,
                    "example": "JohnDoe"
                },
                "passport": {
                    "type": "string"
                },
                "password": {
                    "type": "string",
                    "minLength": 6,
                    "example": "123456"
                },
                "role": {
                    "type": "string",
                    "example": "admin"
                },
                "schedule": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "status": {
                    "type": "string"
                },
                "subscription": {
                    "$ref": "#/definitions/models.Subscription"
                }
            }
        },
        "trainer_handlers.deleteHandler": {
            "type": "object"
        },
        "trainer_handlers.trainerAliace": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "schedule": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Schedule"
                    }
                },
                "specialty": {
                    "type": "string"
                }
            }
        },
        "trainer_handlers.trainerReqHandler": {
            "type": "object"
        },
        "trainer_handlers.trainerUpdateReq": {
            "type": "object"
        },
        "user_handler.UserResponse": {
            "type": "object",
            "properties": {
                "address": {
                    "type": "string"
                },
                "birth": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "passport": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                },
                "schedules": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Schedule"
                    }
                },
                "status": {
                    "type": "string"
                },
                "subscription": {
                    "$ref": "#/definitions/models.Subscription"
                }
            }
        },
        "user_handler.userDeleteReq": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                }
            }
        },
        "user_handler.userUpdateReq": {
            "type": "object",
            "properties": {
                "User": {
                    "$ref": "#/definitions/models.User"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "",
	Host:             "",
	BasePath:         "",
	Schemes:          []string{},
	Title:            "",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
	LeftDelim:        "{{",
	RightDelim:       "}}",
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
