class CocktailTag < ApplicationRecord
    validates :cocktail_id, presence: true

    belongs_to :tag
    belongs_to :cocktail

end
