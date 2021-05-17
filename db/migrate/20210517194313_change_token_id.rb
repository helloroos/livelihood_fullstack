class ChangeTokenId < ActiveRecord::Migration[5.2]
  def change
      change_column :orders, :token_id, :string
  end
end
