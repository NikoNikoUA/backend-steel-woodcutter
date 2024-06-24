import express from "express";
import productsController from "../../controllers/products-controller.js";

const valentineRouter = express.Router();

valentineRouter.get("/", productsController.getValentineProducts);

export default valentineRouter;
