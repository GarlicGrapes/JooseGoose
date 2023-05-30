class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_one :cocktail, through: :blog_cocktail, serializer: BlogCocktailSerializer
end
