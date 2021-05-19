class Order < ApplicationRecord

    validates :token_sym, :number, :user_id,
        :market_price, :amount, presence: true
    validates :order_type, presence: true, 
        inclusion: { in: ["Buy", "Sell"] }

    belongs_to :user, 
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :User

end
