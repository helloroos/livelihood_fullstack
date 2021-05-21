class DropTokens < ActiveRecord::Migration[5.2]
  def change
    drop_table :tokens
  end
end
