class Transfer < ApplicationRecord

    # first line of defense
    validates :amount, :user_id, presence: true
    validates :transfer_type, presence: true, 
        inclusion: { in: ["Deposit", "Withdraw", "Purchase", "Sale"] }

    # creates association between models (a transfer belongs to a user)    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
