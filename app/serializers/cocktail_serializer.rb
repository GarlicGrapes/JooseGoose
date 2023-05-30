class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :title, :type, :user_id, :img_url, :instructions
  has_many :cocktail_ingredients, serializer: CocktailIngredientSerializer
end