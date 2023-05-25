class Tag < ApplicationRecord
    has_many :cocktail_tags
    has_many :blog_tags
    has_many :cocktails, through: :cocktail_tags
    has_many :blogs, through: :blog_tags
end
