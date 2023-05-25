class Cocktail < ApplicationRecord
    validates :title, presence: true
    belongs_to :user
    has_many :cocktail_ingredients, dependent: :destroy
    has_many :ingredients, through: :cocktail_ingredients
    has_many :cocktail_tags, dependent: :destroy
    has_many :tags, through: :cocktail_tags
end
