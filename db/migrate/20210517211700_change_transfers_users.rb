class ChangeTransfersUsers < ActiveRecord::Migration[5.2]
  def change
    # remove_column :transfers, :order_type, :string
    add_column :orders, :order_type, :string
    change_column_null :users, :first_name, false
    change_column_null :users, :last_name, false
    remove_column :users, :dob, :date, null: false
  end
end
