class Order < ApplicationRecord

    validates :user_id, :token_id, :number, 
        :market_price, :total_cost, presence: true

    belongs_to :user, 
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :User

    # has_one :token,
    #     primary_key: :id,
    #     foreign_key: :token_id,
    #     class_name: :Token
end
