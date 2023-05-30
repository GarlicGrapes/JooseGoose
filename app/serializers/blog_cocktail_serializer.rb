class BlogCocktailSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :cocktail
end
