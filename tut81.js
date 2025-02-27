// Mongodb

// Inserting data in mongodb
use ayushKart

db.items.insertOne({name: "Samsung30s" , price: 22000 , rating: 4.5 , qty: 233 , sold: 98})

db.items.insertMany([{name: "Samsung30s" , price: 22000 , rating: 4.5 , qty: 233 , sold: 98} , {name: "Apple" , price: 67000 , rating: 3.9 , qty: 89 , sold: 253} , {name: "Realme" , price: 12000 , rating: 3.3 , qty: 12 , sold: 76 , isBig: "true"}])

// to see db
db.items.find() 