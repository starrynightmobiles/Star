const mongoose = require("mongoose")

const schema = new mongoose.Schema({
 email: { type:String, required:true, unique:true },
 password: { type:String, required:true },
 walletBalance: { type:Number, default:0 }
},{timestamps:true})

module.exports = mongoose.model("User", schema)
