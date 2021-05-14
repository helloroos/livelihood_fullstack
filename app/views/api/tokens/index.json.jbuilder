@tokens.each do |token|
    json.set! token.id do
        json.partial! 'token', token: token
    end
end