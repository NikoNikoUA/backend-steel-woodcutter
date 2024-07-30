import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import helpers from "../helpers/index.js";
import model from "../models/User.js";

dotenv.config();

const { User } = model;

const { JWT_SECRET } = process.env;

const isAuthorized = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  if (!authorization) {
    return next(helpers.HttpError(401, "Not authorized 1"));
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(helpers.HttpError(401, "Not authorized 2"));
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      next(helpers.HttpError(401, "Not authorized 3"));
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Error:", error);
    next(helpers.HttpError(401, "Not authorized 4"));
  }
};

export default isAuthorized;
