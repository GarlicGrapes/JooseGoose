class Cocktail < ApplicationRecord
    belongs_to :user
    has_many :cocktail_ingredients
    has_many :ingredients, through: :cocktail_ingredients
    has_many :cocktail_tags
    has_many :tags, through: :cocktail_tags
end
