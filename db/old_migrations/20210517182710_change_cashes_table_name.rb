class ChangeCashesTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :cashes, :cash
  end
end
