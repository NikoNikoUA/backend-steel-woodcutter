import easterProducts from "../products.js";

const getEasterProducts = async (req, res, next) => {
  try {
    res.json(easterProducts);
  } catch (error) {
    next(error);
  }
};

export default {
  getEasterProducts,
};
