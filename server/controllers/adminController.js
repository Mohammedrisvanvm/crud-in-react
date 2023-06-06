import asyncHandler from "express-async-handler";
import User from "../models/userModel.js"

export const adminHome=async(req,res)=>{
    
    const userInfo=await User.find()
  
    res.json(userInfo)
}
export const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const admin = await User.findOne({ email,admin:true });
  
    if (admin && (await admin.matchPassword(password))) {
     
      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        password: admin.password,
      });
    } else {
      res.status(401);
      throw new Error("invalid email or password");
    }
  });
  export const userUnique=asyncHandler(async(req,res)=>{
    let {id}=req.params
    const userData=await User.findOne({_id:id})
    res.json(userData)
  })