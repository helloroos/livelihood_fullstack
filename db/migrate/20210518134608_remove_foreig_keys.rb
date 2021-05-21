class RemoveForeigKeys < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :user_id
    # remove_column :transfers, :user_id
  end
end
