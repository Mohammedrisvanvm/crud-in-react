import express from "express";
import dotenv from "dotenv"

import userRoute from "./routes/userRouter.js"
import { errorHandler, notfound } from "./middleware/errorMiddleware.js";
import dbConnect from "./config/dataBase.js";
dotenv.config()
const port =process.env.PORT
const app=express()
dbConnect()
app.use('/users',userRoute)
app.get("/",(req,res)=>{console.log("server is ready");})
app.use(notfound)
app.use(errorHandler)
app.listen(port,()=> console.log(`server started at ${port}`))