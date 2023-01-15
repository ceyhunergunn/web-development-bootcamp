const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Check"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review:"Yummy"
});

// const kiwi = new Fruit({
//     name:"Kiwi",
//     rating:10,
//     review:"Best"
// })
// const orange = new Fruit({
//     name:"Orange",
//     rating:10,
//     review:"Best"
// })
// const banana = new Fruit({
//     name:"Banana",
//     rating:10,
//     review:"Best"
// })


// Fruit.insertMany([kiwi,orange,banana], function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Success")
//     }
// })

Fruit.find(function(err,fruits){
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})

// Fruit.updateOne({_id:"63c4660f32d25aad43c94400"},{name:"Apple"},function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully Updated")
//     }
// })

// Fruit.deleteOne({name:"Apple"},function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully Deleted.")
//     }
// })
// fruit.save();


const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFruits: fruitSchema
})

const Person = mongoose.model("Person", personSchema);
// const pineapple = new Fruit({
//     name:"Pinapple",
//     rating:8,
//     review:"OMG!!!"
// })

// pineapple.save();

// const mango = new Fruit({
//     name:"Mango",
//     rating:8,
//     review:"OMG!!!"
// })

// mango.save();

// Person.updateOne({name:"John"},{favoriteFruits:mango},function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Updated")
//     }
// })

// const person = new Person({
//     name:"Amy",
//     age:12,
//     favoriteFruits: pineapple
// })

//  Person.deleteMany({name:"John"},function(err){
//      if (err) {
//          console.log(err)
//      } else {
//          console.log("Successfully Deleted All.")
//      }
// //  })
// person.save();
