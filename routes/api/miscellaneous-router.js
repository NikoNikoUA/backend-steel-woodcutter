import express from "express";
import productsController from "../../controllers/products-controller.js";

const miscellaneousRouter = express.Router();

miscellaneousRouter.get("/", productsController.getMiscellaneousProducts);

export default miscellaneousRouter;
