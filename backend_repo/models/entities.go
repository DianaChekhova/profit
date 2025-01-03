package models

type Kind = string

type Role = string

const (
	UserRole      Role = "user"
	AdminRole     Role = "admin"
	TrainerRole   Role = "trainer"
	SuperUserRole Role = "super"
)
