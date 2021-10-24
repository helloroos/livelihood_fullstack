class CreatePortfolioValues < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_values do |t|
      t.integer "user_id", null: false
      t.decimal "amount", null: false
    end
  end
end
