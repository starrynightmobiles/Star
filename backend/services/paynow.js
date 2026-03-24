module.exports = {
  pay: (amount, phone) => {
    return {
      status: "pending",
      message: "Payment initiated"
    }
  }
}