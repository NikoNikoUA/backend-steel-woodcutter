import express from "express";
import middlewares from "../../middlewares/index.js";
import decorators from "../../decorators/index.js";
import feedbackSchema from "../../models/feedbackMail.js";
import controllers from "../../controllers/sendFeedback-controller.js";

const feedbackRouter = express.Router();

feedbackRouter.use(middlewares.isAuthorized);

feedbackRouter.post(
  "/",
  middlewares.isEmptyBody,
  decorators.validateBody(feedbackSchema),
  decorators.ctrlWrapper(controllers.feedbackMail)
);

export default feedbackRouter;
