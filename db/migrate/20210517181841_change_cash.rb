class ChangeCash < ActiveRecord::Migration[5.2]
  def change
    rename_column :cashes, :type, :transfer_type
  end
end
