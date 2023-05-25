class Ingredient < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true
    validates :description, presence: true

    has_many :cocktail_ingredients
    has_many :cocktails, through: :cocktail_ingredients
end
