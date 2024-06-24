import express from "express";
import productsController from "../../controllers/products-controller.js";

const bookRouter = express.Router();

bookRouter.get("/", productsController.getBookProducts);

export default bookRouter;
