
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI||"mongodb://127.0.0.1:27017/starrynights")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err))

app.use("/api/products",require("./routes/products"))
app.use("/api/orders",require("./routes/orders"))
app.use("/api/auth",require("./routes/auth"))

app.get("/",(req,res)=>res.send("API running"))

app.listen(5000,()=>console.log("Server running"))
