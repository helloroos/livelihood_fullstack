# work on the am

@portfolio_values.each do |value|
    json.set! value.id do
        json.extract! value, :id, :user_id, :amount, :created_at
    end
end