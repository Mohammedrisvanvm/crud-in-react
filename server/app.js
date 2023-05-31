import express from "express";
import dotenv from "dotenv"
dotenv.config()
const port =process.env.PORT
const app=express()

app.get('/',(req,res)=>{
    res.send("started")
})
app.listen(port,()=> console.log(`server started at ${port}`))