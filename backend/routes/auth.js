const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/signup", async (req,res)=>{
 const hashed = await bcrypt.hash(req.body.password,10)
 const user = new User({ email:req.body.email, password:hashed })
 await user.save()
 res.json({message:"User created"})
})

router.post("/login", async (req,res)=>{
 const user = await User.findOne({email:req.body.email})
 if(!user) return res.status(400).json({error:"User not found"})

 const valid = await bcrypt.compare(req.body.password,user.password)
 if(!valid) return res.status(400).json({error:"Invalid password"})

 const token = jwt.sign({id:user._id},"SECRET_KEY")
 res.json({token})
})

module.exports = router
