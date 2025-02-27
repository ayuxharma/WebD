// searching for data in monogdb
use ayushKart

// this query will return all the objects 
db.items.find()

// this query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})

// this query will return all the objects with rating greater than equal to 3.5
db.items.find({rating: {$gte: 3.5}})

// this query will return all the objects with rating greater than 3.5
db.items.find({rating: {$gt: 3.5}})

// And operator
db.items.find({rating: {$gte: 3.5} , price:{$gte:5000}})

// gt = greater than
// lt = less than


// Or operator
db.items.find({$or: [{ rating: { $gte: 3.5 } } , { price: { $gte: 5000 } }]})

/* 
db.items.find({
    $or: [
      { rating: { $gte: 3.5 } },
      { price: { $gte: 5000 } }
    ]
  }) 
*/  
 

// this will return ONLY item ratings with greater than 3.5 rating
db.items.find({rating: {$gt: 3.5}} , {rating: 1})