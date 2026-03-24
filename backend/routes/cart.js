const express = require("express")
const router = express.Router()

let cart = []

router.get("/", (req, res) => {
  res.json(cart)
})

router.post("/add", (req, res) => {
  cart.push(req.body)
  res.json({ message: "Added to cart" })
})

module.exports = router