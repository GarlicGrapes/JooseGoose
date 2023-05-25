class Blog < ApplicationRecord
    belongs_to :user, dependent: :destroy
    has_many :blog_tags, dependent: :destroy
    has_many :tags, through: :blog_tags
end
