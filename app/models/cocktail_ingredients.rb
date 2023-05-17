class CocktailIngredients < ApplicationRecord
    belongs_to :Cocktail
    has_many :ingredients
end
