// CRUD = Create Read Update Delete

ayushKart> db.anotherCollection.insertOne({a: 89})

db.items.updateOne({ name: "Realme" } , { $set: { price: 2 } })

db.items.updateMany({ name: "Realme" } , { $set: { price: 2 , rating: 1 } })


  