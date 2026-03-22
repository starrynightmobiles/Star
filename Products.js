const mongoose = require("mongoose")

const schema = new mongoose.Schema({
 name:String,
 price:Number,
 image:String,
 description:String
})

module.exports = mongoose.model("Product", schema) 
