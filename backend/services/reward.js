exports.rewardUser = async (user, amount) => {
  user.wallet += amount
  await user.save()
}