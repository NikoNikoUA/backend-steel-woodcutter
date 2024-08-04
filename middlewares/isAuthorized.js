import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import helpers from "../helpers/index.js";
import User from "../models/User.js";

dotenv.config();

// const { User } = model;

const { JWT_SECRET } = process.env;

const isAuthorized = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  if (!authorization) {
    return next(helpers.HttpError(401, "Not authorized"));
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(helpers.HttpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    console.log(user);
    if (!user || !user.token || token !== user.token) {
      next(helpers.HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Error:", error);
    next(helpers.HttpError(401, "Not authorized"));
  }
};

export default isAuthorized;
