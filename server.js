import mongoose from "mongoose";
import app from "./app.js";
const port = process.env.PORT || 3000;

const { DB_HOST } = process.env;
console.log(`Connecting to DB at: ${DB_HOST}`);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => console.log(`server running on port ${port}`));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
