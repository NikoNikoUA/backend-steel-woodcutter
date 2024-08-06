import { Schema, model } from "mongoose";
import Joi from "joi";
import { addUpdateSettings, handleSaveError } from "./hook.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userNameRegexp =
  /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegex,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    avatar: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timeStamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", addUpdateSettings);

userSchema.post("findOneAndUpdate", handleSaveError);

export const userRegistrationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
  avatar: Joi.string(),
});

export const userLogInSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
  avatar: Joi.string(),
});

export const userUpdateSchema = Joi.object({
  username: Joi.string().pattern(userNameRegexp).message("Invalid username"),
  email: Joi.string().pattern(emailRegex).message("Invalid email"),
  password: Joi.string().min(6),
  avatar: Joi.string(),
});

const User = model("user", userSchema);

export default User;
