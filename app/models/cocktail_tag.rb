class CocktailTag < ApplicationRecord
    belongs_to :tag
    belongs_to :cocktail
end
