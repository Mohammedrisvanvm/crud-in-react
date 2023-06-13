import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  if (user && (await user.matchPassword(password))) {
    res
      .status(200)
      .cookie("user", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.image,
      });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(401);
    throw new Error("User Already Exist");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res
      .status(201)
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .cookie("user", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
  } else {
    res.status(400);
    throw new Error("invalid user");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("user", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out " });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});
export const editProfile = async (req, res) => {
  try {
    const image = req.file.filename;

    await User.findByIdAndUpdate(req.body.id, {
      $set: {
        image,
      },
    });
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, message: "Something went wrong" });
  }
};
export const userCheck = async (req, res) => {
  try {
    const token = req.cookies.user;

    if (!token)
      return res.json({ loggedIn: false, error: true, message: "no token" });

    const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verifiedJWT.user, { password: 0 });

    if (!user) {
      return res.json({ loggedIn: false });
    }
    return res.json({ user, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.json({ loggedIn: false, error: err });
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
