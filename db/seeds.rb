# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
OnEarth = Blog.create(title:"On Earth We're Briefly Gorgeous", content:"Lord I don't cry no more, don't look to the sky no more")
AllAboutLove = Blog.create(title:"All About Love", content:"That is not love, that is cathexis")
ClassicDaquiri = Blog.create(title:"How To Make a Classic Daquiri", content: "The classic daquiri - white rum, simple syrup, and lime delicious.")
HemmingwayDaquiri = Blog.create(title:"How To Make a Hemmingway Daquiri", content: "A variant on the classic daquiri - stronger and with luxardo")

Lime = Ingredient.create(name: "Lime", description: "The green citrus - used to add acidity and some sweetness to balance the astringent liquor", img_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgur.com%2Ft%2Flime&psig=AOvVaw1CgQMzzT04x2kEXbSnVx_Z&ust=1684543296980000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCID90PiSgP8CFQAAAAAdAAAAABAg")
Lemon = Ingredient.create(name: "Lemon", description: "The yellow citrus - stronger in acidity than limes", img_url: "https://i.imgur.com/12U8SAe_d.webp?maxwidth=760&fidelity=grand")

CocktailGuy = User.create(username: "CocktailGuy", password:"Carhartt")
CasualObserver = User.create(username: "CasualObserver", password: "Yummy")

50.times do |i|
    Ingredient.create!(name: Faker::Food.unique.fruits, description: Faker::Lorem.sentence(word_count:8))
end