import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRouter.js";
import { errorHandler, notfound } from "./middleware/errorMiddleware.js";
import dbConnect from "./config/dataBase.js";

dotenv.config();

const app = express();
dbConnect();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/users", userRoute);
app.get("/", (req, res) => {
  console.log("server is ready");
});
app.use(notfound);
app.use(errorHandler);
app.listen(process.env.PORT, () => console.log(`server started at ${process.env.PORT}`));
