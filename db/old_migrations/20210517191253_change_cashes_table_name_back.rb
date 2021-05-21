class ChangeCashesTableNameBack < ActiveRecord::Migration[5.2]
  def change
    rename_table :cash, :cashes
  end
end
