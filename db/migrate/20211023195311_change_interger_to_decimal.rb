class ChangeIntergerToDecimal < ActiveRecord::Migration[5.2]
  def change
    change_column :orders, :amount, :decimal
    change_column :transfers, :amount, :decimal
    change_column :orders, :market_price, :decimal
  end
end
