const mongoose = require("mongoose")

const referralSchema = new mongoose.Schema({
  referrer: String,
  referred: String,
  reward: { type: Number, default: 10 }
})

module.exports = mongoose.model("Referral", referralSchema)