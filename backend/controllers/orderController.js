const Order = require("../models/Order")

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body)
  res.json(order)
}

exports.updateStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  )
  res.json(order)
}