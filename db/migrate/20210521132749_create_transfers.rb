class CreateTransfers < ActiveRecord::Migration[5.2]
  def change
    create_table :transfers do |t|
      t.string :transfer_type, null: false
      t.integer :amount, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
