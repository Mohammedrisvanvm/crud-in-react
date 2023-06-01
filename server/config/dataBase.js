import mongoose from "mongoose";

function dbConnect() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected!"));
}

export default dbConnect;
