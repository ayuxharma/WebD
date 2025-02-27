show dbs 
use ayushKart
show collections 

db.items.find({price: 22000})

// Deleting items from the mongo database

// deleteOne will delete the matching entry and will delete the first entry in case of multi document match
db.items.deleteOne({price: 12000})

// deleteMany will delete all the matching entries
db.items.deleteMany({price: 22000})