package use_cases

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"profit/models"
)

// UserRepository определяет интерфейс для работы с пользователями.
type UserRepository interface {
	Create(user *models.User) error
	GetByID(id primitive.ObjectID) (*models.User, error)
	Update(user *models.User) error
	Delete(id primitive.ObjectID) error
	List() ([]*models.User, error)
}
