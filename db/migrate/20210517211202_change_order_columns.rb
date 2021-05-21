class ChangeOrderColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :orders, :token_id, :token_sym
    rename_column :orders, :total_cost, :amount
    # add_column :transfers, :order_type, :string
  end
end
