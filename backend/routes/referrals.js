const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.post("/", async (req, res) => {
  const { userId, referralCode } = req.body

  const user = await User.findById(userId)
  user.walletBalance += 10
  await user.save()

  res.json({ message: "Referral reward added" })
})

module.exports = router