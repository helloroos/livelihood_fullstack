class CreateTokens < ActiveRecord::Migration[5.2]
  def change
    create_table :tokens do |t|
      t.string :token, null: false
      t.string :token_symbol, null: false
      t.integer :market_price
      t.timestamps
    end
  end
end
