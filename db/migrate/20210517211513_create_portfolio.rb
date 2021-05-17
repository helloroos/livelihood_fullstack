class CreatePortfolio < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :order_id, null: false
      t.integer :transfer_id, null: false
    end
  end
end
