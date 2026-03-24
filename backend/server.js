const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/products", require("./routes/products"))
app.use("/api/cart", require("./routes/cart"))
app.use("/api/orders", require("./routes/orders"))
app.use("/api/wallet", require("./routes/wallet"))

// Test route
app.get("/", (req, res) => {
  res.send("API running")
})

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected")

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
.catch(err => console.log(err))