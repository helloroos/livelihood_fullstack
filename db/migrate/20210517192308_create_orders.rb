class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :token_id, null: false
      t.integer :number, null: false
      t.integer :market_price, null: false
      t.integer :total_cost, null: false
      t.index :user_id
      t.index :token_id
      t.timestamps
    end
  end
end
