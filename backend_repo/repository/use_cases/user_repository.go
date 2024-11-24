package use_cases

import "profit/models"

// UserRepository определяет интерфейс для работы с пользователями.
type UserRepository interface {
	Create(user *models.User) error
	GetByID(id int) (*models.User, error)
	Update(user *models.User) error
	Delete(id int) error
	List() ([]*models.User, error)
}
