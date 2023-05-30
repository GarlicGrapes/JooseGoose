class CocktailIngredient < ApplicationRecord
    belongs_to :cocktail
    belongs_to :ingredient

    def ingredientName
        ingredient_id = self.ingredient_id
        Ingredient.find(ingredient_id).name
    end
end
