# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Order.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('orders')
Transfer.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('transfers')
User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
PortfolioValue.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('portfolio_values')

groot = User.create!(
    first_name: "Groot",
    last_name: "Groot",
    email: "iamgroot@marvel.com",
    password: "password"
)

# mantice = User.create!(
#     first_name: "Mantice",
#     last_name: "Brandt",
#     email: "mantice@marvel.com",
#     password: "password"
# )

order = Order.create!(token_sym: "bitcoin", number: 1, market_price: 63238, amount: 63238, order_type: "Buy", user_id: User.first.id)

transfer = Transfer.create!(transfer_type: "Deposit", amount: 100000, user_id: User.first.id)

# portfolio_value = PortfolioValue.create!({user_id: User.first.id, amount: 5500})