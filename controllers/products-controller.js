// import easterProducts from "../products.js";
import EasterProduct from "../models/Easter.js";
import MiscellaneousProduct from "../models/Miscellaneous.js";

const getEasterProducts = async (req, res, next) => {
  try {
    const result = await EasterProduct.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getMiscellaneousProducts = async (req, res, next) => {
  try {
    const result = await MiscellaneousProduct.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getEasterProducts,
  getMiscellaneousProducts,
};
