class BlogTagSerializer < ActiveModel::Serializer
  attributes :id, :blog_id, :tag_id
end
