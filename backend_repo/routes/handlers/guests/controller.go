package guests

import (
	"context"
	"encoding/json"
	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"net/http"
	"profit/models"
	"profit/repository/use_cases/dbs_repositories/mongoDriver"
	"profit/routes/handlers/backendController"
)

type GuestsController struct {
	suggestionRepository *mongoDriver.SuggestRepository
}

func NewGuestsController(ctx context.Context, database *mongo.Database) *GuestsController {
	return &GuestsController{
		suggestionRepository: mongoDriver.NewSuggestRepository(database),
	}
}

func (g *GuestsController) GetSuggestions(w http.ResponseWriter, r *http.Request) {
	suggestions, err := g.suggestionRepository.GetSuggestions()
	if err != nil {
		backendController.WriteJSONResponse(w, http.StatusInternalServerError, err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	backendController.WriteJSONResponse(w, 200, suggestions)
}

func (g *GuestsController) SaveSuggestion(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var suggestion models.Suggestion
	err := decoder.Decode(&suggestion)
	if err != nil {
		backendController.WriteJSONResponse(w, 400, err.Error())
	}

	err = g.suggestionRepository.SaveSuggestion(suggestion)
	if err != nil {
		backendController.WriteJSONResponse(w, 400, err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	backendController.WriteJSONResponse(w, 200, "suggestion added")
}

func (g *GuestsController) DeleteSuggestion(w http.ResponseWriter, r *http.Request) {
	sugId := chi.URLParam(r, "id")
	oid, err := primitive.ObjectIDFromHex(sugId)
	if err != nil {
		backendController.WriteJSONResponse(w, 400, err.Error())
	}

	err = g.suggestionRepository.DeleteSuggestion(oid)
	if err != nil {
		backendController.WriteJSONResponse(w, 400, err.Error())
	}
	backendController.WriteJSONResponse(w, 200, "suggestion deleted")
}

type changeActivityReq struct {
	Oid      primitive.ObjectID `json:"id"`
	IsActive bool               `json:"is_active"`
}

func (g *GuestsController) ChangeSuggestionActivity(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var req changeActivityReq
	err := decoder.Decode(&req)
	if err != nil {
		backendController.WriteJSONResponse(w, 400, err.Error())
	}

	err = g.suggestionRepository.ChangeSuggestionActivity(req.Oid, req.IsActive)
	if err != nil {
		backendController.WriteJSONResponse(w, 400, err.Error())
	}

	backendController.WriteJSONResponse(w, 200, "suggestion updated")
}
