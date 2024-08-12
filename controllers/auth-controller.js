import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";

import User from "../models/User.js";
import helpers from "../helpers/index.js";
import decorators from "../decorators/index.js";

dotenv.config();

const { JWT_SECRET } = process.env;
const avatarPath = path.resolve("public", "avatars");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw helpers.HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.json({
    username: newUser.username,
    email: newUser.email,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw helpers.HttpError(401, "Email or password is invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw helpers.HttpError(401, "Email or password is invalid");
  }

  const { _id: id, username: username } = user;
  const payload = {
    id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    username,
  });
};

const getCurrent = async (req, res) => {
  const { username, email } = req.user;

  res.json({
    username,
    email,
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logged out successfully",
  });
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.user;

    if (req.body.password) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashPassword;
    }

    if (req.file) {
      const { path: oldPath, originalname } = req.file;
      const ext = path.extname(originalname);
      const newName = `sl_${Date.now()}${ext}`;
      const newPath = path.join(avatarPath, newName);
      await fs.rename(oldPath, newPath);
      const avatar = path.join("avatars", newName);
      req.body.avatar = avatar;
    }

    const result = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.json({
      avatar: result.avatar,
      username: result.username,
      email: result.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  register: decorators.ctrlWrapper(register),
  login: decorators.ctrlWrapper(login),
  getCurrent: decorators.ctrlWrapper(getCurrent),
  logout: decorators.ctrlWrapper(logout),
  updateUser: decorators.ctrlWrapper(updateUser),
};
