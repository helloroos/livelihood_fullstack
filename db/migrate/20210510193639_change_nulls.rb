class ChangeNulls < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :first_name, true
    change_column_null :users, :last_name, true
    remove_column :users, :dob, :string
    add_column :users, :dob, :date
  end
end
