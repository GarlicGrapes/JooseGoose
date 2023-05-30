class CocktailIngredientSerializer < ActiveModel::Serializer
  attributes :quantity, :unit
  belongs_to :ingredient, serializer: IngredientNameSerializer
end