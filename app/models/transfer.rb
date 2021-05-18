class Transfer < ApplicationRecord

    validates :amount, :user_id, presence: true
    validates :transfer_type, presence: true, 
        inclusion: { in: ["deposit", "withdraw"] }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
