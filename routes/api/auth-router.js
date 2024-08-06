import express from "express";

import middlewares from "../../middlewares/index.js";

import decorators from "../../decorators/index.js";

import authController from "../../controllers/auth-controller.js";

import {
  userRegistrationSchema,
  userLogInSchema,
  userUpdateSchema,
} from "../../models/User.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  middlewares.isEmptyBody,
  decorators.validateBody(userRegistrationSchema),
  authController.register
);

authRouter.post(
  "/login",
  middlewares.isEmptyBody,
  decorators.validateBody(userLogInSchema),
  authController.login
);

authRouter.get("/current", middlewares.isAuthorized, authController.getCurrent);

authRouter.post("/logout", middlewares.isAuthorized, authController.logout);

authRouter.put(
  "/users",
  middlewares.isAuthorized,
  middlewares.upload.single("avatar"),
  decorators.validateBody(userUpdateSchema),
  authController.updateUser
);

export default authRouter;
