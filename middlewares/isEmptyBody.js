import helper from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    return next(helper.HttpError(400, "Missing required name field"));
  }
  next();
};

export default isEmptyBody;
