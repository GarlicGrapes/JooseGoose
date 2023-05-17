class CocktailIngredientSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :ingredient_id, :quantity, :unit
end
