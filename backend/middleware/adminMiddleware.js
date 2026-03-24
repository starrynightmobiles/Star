const User = require("../models/User")
const Transaction = require("../models/Transaction")

exports.deposit = async (req, res) => {
  const { userId, amount } = req.body

  const user = await User.findById(userId)
  user.wallet += amount
  await user.save()

  await Transaction.create({
    userId,
    amount,
    type: "deposit"
  })

  res.json(user)
}