class Transfer < ApplicationRecord

    validates :amount, :user_id, presence: true
    validates :transfer_type, presence: true, 
        inclusion: { in: ["Deposit", "Withdraw", "Purchase"] }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
