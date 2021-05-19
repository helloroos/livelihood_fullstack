@transfers.each do |transfer|
    json.set! transfer.id do
        # json.partial! 'api/transfers/transfer', transfer: transfer
        json.extract! transfer, :id, :user_id, :transfer_type, :amount
    end
end