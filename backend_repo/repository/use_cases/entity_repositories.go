package use_cases

import (
	"context"
	"profit/models"
)

// UserRepository определяет интерфейс для работы с пользователями.
type AdminRepository interface {
	CreateAdmin(ctx context.Context, admin models.Admin) error
	DeleteAdminByID(ctx context.Context, id string) error
	GetAdminByEmail(ctx context.Context, email string) (*models.Admin, error)
	AdminList(ctx context.Context) ([]models.Admin, error)
}

type TrainerRepository interface {
	GetTrainerByID(ctx context.Context, id string) (*models.Trainer, error)
	GetTrainerByEmail(ctx context.Context, email string) (*models.Trainer, error)
	DeleteTrainerByID(ctx context.Context, id string) error
	TrainersList(ctx context.Context) ([]*models.Trainer, error)
	CreateTrainer(ctx context.Context, trainer *models.Trainer) error
	UpdateTrainer(ctx context.Context, trainer *models.Trainer) error
}

type UserRepository interface {
	GetUserByID(ctx context.Context, id string) (*models.User, error)
	UsersList(ctx context.Context) ([]*models.User, error)
	GetUserByEmail(ctx context.Context, email string) (*models.User, error)
	UpdateUser(ctx context.Context, user *models.User) error
	CreateUser(ctx context.Context, user *models.User) error
	DeleteUser(ctx context.Context, id string) error
}

type SubscriptionRepository interface {
	CreateSubscription(ctx context.Context, subscription models.Subscription) (*models.Subscription, error)
	UpdateSubscription(ctx context.Context, subscription models.Subscription) error
	EnableSubscription(ctx context.Context, subscription models.Subscription) error
	DisableSubscription(ctx context.Context, subscription models.Subscription) error
}
