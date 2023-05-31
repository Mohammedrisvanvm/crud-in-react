import express from "express";
import dotenv from "dotenv"

import userRoute from "./routes/userRouter.js"
dotenv.config()
const port =process.env.PORT
const app=express()

app.use('/users',userRoute)
app.get("/",(req,res)=>{console.log("server is ready");})
app.listen(port,()=> console.log(`server started at ${port}`))