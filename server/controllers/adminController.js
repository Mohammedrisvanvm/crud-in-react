import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

import jwt from "jsonwebtoken";

export const adminHome = async (req, res) => {
  let userInfo;

  if (req.query.search) {
    userInfo = await User.find(
      { name: new RegExp(req.query.search, "i") },
      { password: 0 }
    ).lean();
  } else {
    userInfo = await User.find().lean();
  }

  res.json(userInfo);
};
export const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, admin: true });

  if (!admin) {
    return res.json({ admin: false });
  }

  if (admin && (await admin.matchPassword(password))) {
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("admin", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ admin: true });
  } else {
    throw new Error("Invalid email or password");
  }
});
export const userUnique = asyncHandler(async (req, res) => {
  let { id } = req.params;
  const userData = await User.findOne({ _id: id });
  res.json(userData);
});
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { id, name, email, password } = req.body;

  const user = await User.findByIdAndUpdate(id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();
    res.status(200).json({ success: true });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete({ _id: req.body.id });
  res.json({ success: true });
});

export const logoutadmin = asyncHandler(async (req, res) => {
  res.cookie("admin", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "admin logged out " });
});
export const adminCheck = async (req, res) => {
  try {
    const token = req.cookies.admin;
    if (!token)
      return res.json({ loggedIn: false, error: true, message: "no token" });

    const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verifiedJWT.id, { password: 0 });
    if (!user) {
      return res.json({ loggedIn: false });
    }
    return res.json({ user, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.json({ loggedIn: false, error: err });
  }
};
export async function usersSearch(req, res) {
  try {
    let users = await User.find(
      { admin: { $ne: true }, name: new RegExp(req.query.search, "i") },
      { password: 0 }
    ).lean();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
}
