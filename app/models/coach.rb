class Coach < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true

    # *q: is this the right move?
    has_many :slots
end
