import express from "express";
import middlewares from "../../middlewares/index.js";
import controllers from "../../controllers/favorites-controller.js";

const favoritesRouter = express.Router();

favoritesRouter.use(middlewares.isAuthorized);

favoritesRouter.post("/", controllers.addFavorite);

favoritesRouter.get("/", controllers.getAllFavorites);

favoritesRouter.delete("/:id", controllers.deleteFavoriteById);

export default favoritesRouter;
