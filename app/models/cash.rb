class Cash < ApplicationRecord

    validates :user_id, :amount, presence: true
    validates :transfer_type, inclusion: { in: ["deposit", "withdraw"] }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
