import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

import easterRouter from "./routes/api/easter-router.js";
import miscellaneousRouter from "./routes/api/miscellaneous-router.js";
import christmasRouter from "./routes/api/christmas-router.js";
import valentineRouter from "./routes/api/valentine-router.js";
import bookRouter from "./routes/api/book-router.js";
import authRouter from "./routes/api/auth-router.js";
import favoritesRouter from "./routes/api/favorites-router.js";

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use("/images", express.static("images"));

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());
// app.use(express.static("public"));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/auth", authRouter);

app.use("/api/easter-products", easterRouter);

app.use("/api/miscellaneous-products", miscellaneousRouter);

app.use("/api/christmas-products", christmasRouter);

app.use("/api/valentine-products", valentineRouter);

app.use("/api/book-products", bookRouter);

app.use("/api/favorites", favoritesRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

export default app;
