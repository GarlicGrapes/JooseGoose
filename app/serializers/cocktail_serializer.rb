class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :title, :type, :user_id, :img_url
end
