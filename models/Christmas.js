import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const christmasSchema = new Schema({
  name: String,
  material: String,
  category: String,
  price: String,
  url: String,
  dimensions: String,
  description: String,
});

christmasSchema.post("save", handleSaveError);

const ChristmasProduct = model("christmas-product", christmasSchema);

export default ChristmasProduct;
