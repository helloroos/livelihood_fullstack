class ChangeNullValues < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :user_id, :integer
    change_column_null :portfolios, :order_id, true
    change_column_null :portfolios, :transfer_id, true
    change_column_null :portfolios, :user_id, false
  end
end
