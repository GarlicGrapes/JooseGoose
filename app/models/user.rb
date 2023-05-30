class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    validates :username, length: {minimum: 3, maximum: 16}
    validates :username, presence: true
    validates :password, length: {minimum: 3, maximum: 20}
    validates :password, presence: true

    has_many :blogs
    has_many :cocktails


end
