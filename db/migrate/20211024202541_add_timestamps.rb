class AddTimestamps < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolio_values, :created_at, :datetime, null: false
    add_column :portfolio_values, :updated_at, :datetime, null: false
  end
end
