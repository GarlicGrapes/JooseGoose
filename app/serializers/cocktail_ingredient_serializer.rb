class CocktailIngredientSerializer < ActiveModel::Serializer
  attributes :quantity, :unit, :ingredient
  belongs_to :ingredient, serializer: IngredientNameSerializer

  def ingredientName
    ingredient_id = self.ingredient_id
    Ingredient.find(ingredient_id).name
  end


end