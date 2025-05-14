package mongoDriver

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"profit/models"
)

type SuggestRepository struct {
	collection *mongo.Collection
}

func NewSuggestRepository(db *mongo.Database) *SuggestRepository {
	return &SuggestRepository{
		collection: db.Collection("suggestion"),
	}
}

func (s *SuggestRepository) SaveSuggestion(sug models.Suggestion) error {
	_, err := s.collection.InsertOne(context.Background(), sug)
	return err
}

func (s *SuggestRepository) GetSuggestions() ([]models.Suggestion, error) {
	result, err := s.collection.Find(context.Background(), bson.D{})
	if err != nil {
		return nil, err
	}
	var suggestions []models.Suggestion

	err = result.All(context.Background(), &suggestions)
	if err != nil {
		return nil, err
	}
	return suggestions, nil
}

func (s *SuggestRepository) ChangeSuggestionActivity(oid primitive.ObjectID, isActive bool) error {
	filter := bson.M{"oid": oid}
	_, err := s.collection.UpdateOne(context.Background(), filter, bson.M{"$set": bson.M{"isActive": isActive}})
	return err
}

func (s *SuggestRepository) DeleteSuggestion(oid primitive.ObjectID) error {
	_, err := s.collection.DeleteOne(context.Background(), bson.M{"oid": oid})
	return err
}
