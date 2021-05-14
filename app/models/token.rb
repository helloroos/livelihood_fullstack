class Token < ApplicationRecord

    validates :token, :token_symbol, presence: true, uniqueness: true

end
