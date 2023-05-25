class CocktailTagSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :tag_id
end
