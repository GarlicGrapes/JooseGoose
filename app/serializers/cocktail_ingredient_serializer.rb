class CocktailIngredientSerializer < ActiveModel::Serializer
  attributes :quantity, :unit, :ingredient
  belongs_to :ingredient, serializer: IngredientNameSerializer

end