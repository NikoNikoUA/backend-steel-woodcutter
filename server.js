import mongoose from "mongoose";
import app from "./app.js";
//wTrDWpn4Zh1xMMaL

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => console.log(`server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
