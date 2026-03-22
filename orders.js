const router = require("express").Router()

router.post("/", (req,res)=>{
 res.json({message:"Order placed"})
})

module.exports = router
