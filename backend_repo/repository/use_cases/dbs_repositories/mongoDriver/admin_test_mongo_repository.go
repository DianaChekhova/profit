package mongoDriver

import (
	"errors"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"sync"

	"profit/models"
)

// Для тестирования
type AdminTestRepository struct {
	data   map[string]*models.User
	mu     sync.RWMutex
	nextID string
}

func NewUserMemoryRepository() *AdminTestRepository {
	return &AdminTestRepository{
		data:   make(map[string]*models.User),
		nextID: primitive.NewObjectID().Hex(),
	}
}

func (r *AdminTestRepository) Create(user *models.User) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	user.ID = r.nextID
	r.nextID = primitive.NewObjectID().Hex()
	r.data[user.ID] = user
	return nil
}

func (r *AdminTestRepository) GetByID(id string) (*models.User, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	user, exists := r.data[id]
	if !exists {
		return nil, errors.New("user not found")
	}
	return user, nil
}

func (r *AdminTestRepository) Update(user *models.User) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, exists := r.data[user.ID]; !exists {
		return errors.New("user not found")
	}
	r.data[user.ID] = user
	return nil
}

func (r *AdminTestRepository) Delete(id string) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, exists := r.data[id]; !exists {
		return errors.New("user not found")
	}
	delete(r.data, id)
	return nil
}

func (r *AdminTestRepository) List() ([]*models.User, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	users := make([]*models.User, 0, len(r.data))
	for _, user := range r.data {
		users = append(users, user)
	}
	return users, nil
}
