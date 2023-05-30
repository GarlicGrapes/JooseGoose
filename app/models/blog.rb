class Blog < ApplicationRecord
    belongs_to :user, dependent: :destroy
    has_many :blog_tags, dependent: :destroy
    has_many :tags, through: :blog_tags
    has_one :blog_cocktail
    has_one :cocktail, through: :blog_cocktail

    validates :content, length: {minimum: 10, maximum: 2000}
end
