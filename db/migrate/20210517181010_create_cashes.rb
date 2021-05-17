class CreateCashes < ActiveRecord::Migration[5.2]
  def change
    create_table :cashes do |t|
      t.integer :user_id, null: false
      t.string :type, null: false
      t.integer :amount, null: false
      t.index :user_id
      t.timestamps
    end
  end
end
