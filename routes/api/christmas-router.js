import express from "express";
import productsController from "../../controllers/products-controller.js";

const christmasRouter = express.Router();

christmasRouter.get("/", productsController.getChristmasProducts);

export default christmasRouter;
