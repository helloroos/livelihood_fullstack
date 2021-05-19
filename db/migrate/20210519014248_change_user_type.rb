class ChangeUserType < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :user_id, :string
    remove_column :transfers, :user_id, :string
    add_column :orders, :user_id, :integer
    add_column :transfers, :user_id, :integer
  end
end
