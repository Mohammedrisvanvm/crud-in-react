import User from "../models/userModel.js"

export const adminHome=async(req,res)=>{
    
    const userInfo=await User.find()
  
    res.json(userInfo)
}