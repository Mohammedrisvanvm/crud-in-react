import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";



const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});
const registerUser = asyncHandler(async (req, res) => {

  const {name,email,password}=req.body

const userExist=await User.findOne({email})
if(userExist){
res.status(401)
throw new Error('User Already Exist')
}
const user=await User.create({name,email,password})

 
  console.log(name,email,password,userExist);
  res.status(200).json({ message: "Register User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout User" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
