class ChangeCashesToTransfers < ActiveRecord::Migration[5.2]
  def change
    rename_table :cashes, :transfers
  end
end
