import BookProduct from "../models/Book.js";
import ChristmasProduct from "../models/Christmas.js";
import EasterProduct from "../models/Easter.js";
import MiscellaneousProduct from "../models/Miscellaneous.js";
import ValentineProduct from "../models/Valentine.js";

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

const getChristmasProducts = async (req, res, next) => {
  try {
    const result = await ChristmasProduct.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getValentineProducts = async (req, res, next) => {
  try {
    const result = await ValentineProduct.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getBookProducts = async (req, res, next) => {
  try {
    const result = await BookProduct.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getEasterProducts,
  getMiscellaneousProducts,
  getChristmasProducts,
  getValentineProducts,
  getBookProducts,
};
