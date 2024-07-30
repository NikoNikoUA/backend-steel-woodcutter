import helpers from "../helpers/HttpError.js";
import Favorite from "../models/Favorite.js";

const getAllFavorites = async (req, res, next) => {
  const { _id: owner } = req.user;
  try {
    const result = await Favorite.find({ owner });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Favorite.create({ ...req.body, owner });
  res.status(201).json(result);
};

const deleteFavorite = async (req, res) => {
  const { id: _id } = req.params;
  const { _id: owner } = req.user;
  const result = await Favorite.findOneAndDelete({ _id, owner });
  if (!result) {
    throw helpers.HttpError(404, `Product with id=${id} is not found`);
  }
  res.json({
    message: "Deleted successfully",
  });
};

export default {
  addFavorite,
  getAllFavorites,
  deleteFavorite,
};
