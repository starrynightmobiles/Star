
const router=require("express").Router()

router.post("/login",(req,res)=>{
 res.json({message:"login success"})
})

module.exports=router
