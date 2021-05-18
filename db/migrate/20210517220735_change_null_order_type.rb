class ChangeNullOrderType < ActiveRecord::Migration[5.2]
  def change
    change_column_null :orders, :order_type, false
  end
end
