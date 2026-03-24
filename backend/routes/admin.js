const express = require("express")
const router = express.Router()

router.get("/stats", (req, res) => {
  res.json({
    users: 100,
    orders: 50,
    revenue: 1000
  })
})

module.exports = router