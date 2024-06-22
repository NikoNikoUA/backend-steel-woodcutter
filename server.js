import mongoose from "mongoose";
import app from "./app.js";
//wTrDWpn4Zh1xMMaL

const DB_HOST =
  "mongodb+srv://nickbleyck:wTrDWpn4Zh1xMMaL@cluster0.i2h5nio.mongodb.net/wooden-products?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => console.log("server running on port 3000"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
