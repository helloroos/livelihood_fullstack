@orders.each do |order|
    json.set! order.id do
        json.extract! order, :id, :user_id, :order_type, 
            :amount, :token_sym, :number, :market_price
    end
end