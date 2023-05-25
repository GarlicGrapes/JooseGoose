class BlogTag < ApplicationRecord
    validates :blog_id, presence: true

    belongs_to :blog, dependent: :destroy
    belongs_to :tag
    
end
