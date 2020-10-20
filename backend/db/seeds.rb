# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.destroy_all
Npc.destroy_all
User.destroy_all
Character.destroy_all
Game.destroy_all

Item.create(name: "rusted dagger", description: "a short blade with a slightly rusted edge", item_type: "weapon", effect: 2)
Item.create(name: "key", description: "a key used to unlock a door", item_type: "tool", effect: 0)
Item.create(name: "chicken thigh", description: "a piece of chicken that is still warm to the touch.", item_type: "curative", effect: 5)

Npc.create(name: "Bozjan Hiram", hp: 25, strength: 14, speed: 10, mind: 8)
Npc.create(name: "Shambling Skeleton", hp: 8, strength: 10, speed: 8, mind: 8)

alex = User.create(username: "denimcouch", password: "password")

war = Character.create(name: "The Warrior", hp: 40, strength: 16, speed: 12, mind: 8)
thief = Character.create(name: "The Thief", hp: 30, strength: 8, speed: 16, mind: 12)
wiz = Character.create(name: "The Wizard", hp: 30, strength: 8, speed: 12, mind: 16)

Game.create(user_id: alex.id, character_id: thief.id)

puts "You wake up in a dusty dungeon"