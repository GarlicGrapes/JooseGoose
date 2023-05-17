class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link, :img_url
end
