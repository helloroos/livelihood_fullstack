# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

groot = User.create!(
    first_name: "Groot",
    last_name: "Groot",
    email: "iamgroot@marvel.com",
    password: "password"
)

mantice = User.create!(
    first_name: "Mantice",
    last_name: "Brandt",
    email: "mantice@marvel.com",
    password: "password"
)