import express from "express";
import productsController from "../../controllers/products-controller.js";

const easterRouter = express.Router();

easterRouter.get("/", productsController.getEasterProducts);

export default easterRouter;
