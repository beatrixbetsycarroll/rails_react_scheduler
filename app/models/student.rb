class Student < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true

    has_many :slots
end
