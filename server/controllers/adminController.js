import User from "../models/userModel.js"

export const adminHome=async(req,res)=>{
    console.log('hai');
    const userInfo=await User.find()
    console.log(userInfo);
    res.json(userInfo)
}