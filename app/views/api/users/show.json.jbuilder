# json.partial! "/api/users/user", user: @user
json.user do
    json.extract! @user, :id, :email, :first_name, :last_name
end

def summer
    sum = 0
    @user.transfers.each do |transfer|
        if transfer.transfer_type == "Deposit"
            sum += transfer.amount
        else
            sum -= transfer.amount
        end
    end
    return sum
end

json.buyingPower summer

json.transfers do
    @user.transfers.each do |transfer|
        json.set! transfer.id do
            json.extract! transfer, :id, :transfer_type, :amount, :created_at,
                :user_id
        end
    end
end

json.orders do
    @user.orders.each do |order|
        json.set! order.id do
            json.extract! order, :id, :user_id, :token_sym, :number,
                :market_price, :amount, :order_type, :created_at
        end
    end
end