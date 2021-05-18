class Portfolio < ApplicationRecord

    # validates :user_id, presence: true

    # belongs_to :user,
    #     primary_key: :id,
    #     foreign_key: :user_id,
    #     class_name: :User

    # has_many :orders, 
    #     primary_key: :id,
    #     foreign_key: :user_id, 
    #     class_name: :Order

    # belongs_to :order,
    #     primary_key: :id,
    #     foreign_key: :order_id,
    #     class_name: :Order

    # belongs_to :transfer,
    #     primary_key: :id,
    #     foreign_key: :transfer_id,
    #     class_name: :Transfer

end
