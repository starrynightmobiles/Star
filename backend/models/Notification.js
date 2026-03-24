const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
  userId: String,
  message: String
})

module.exports = mongoose.model("Notification", notificationSchema)