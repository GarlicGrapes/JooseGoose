class Blog < ApplicationRecord
    belongs_to :user
    has_many :blog_tags
    has_many :tags, through: :blog_tags
end
