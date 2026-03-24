const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.json({ balance: user.walletBalance })
})

module.exports = router