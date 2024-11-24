package use_cases

import (
	"errors"
	"sync"

	"profit/models"
)

// Для тестирования
type UserMemoryRepository struct {
	data   map[int]*models.User
	mu     sync.RWMutex
	nextID int
}

func NewUserMemoryRepository() *UserMemoryRepository {
	return &UserMemoryRepository{
		data:   make(map[int]*models.User),
		nextID: 1,
	}
}

func (r *UserMemoryRepository) Create(user *models.User) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	user.ID = r.nextID
	r.nextID++
	r.data[user.ID] = user
	return nil
}

func (r *UserMemoryRepository) GetByID(id int) (*models.User, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	user, exists := r.data[id]
	if !exists {
		return nil, errors.New("user not found")
	}
	return user, nil
}

func (r *UserMemoryRepository) Update(user *models.User) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, exists := r.data[user.ID]; !exists {
		return errors.New("user not found")
	}
	r.data[user.ID] = user
	return nil
}

func (r *UserMemoryRepository) Delete(id int) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, exists := r.data[id]; !exists {
		return errors.New("user not found")
	}
	delete(r.data, id)
	return nil
}

func (r *UserMemoryRepository) List() ([]*models.User, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	users := make([]*models.User, 0, len(r.data))
	for _, user := range r.data {
		users = append(users, user)
	}
	return users, nil
}
