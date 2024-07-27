import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const christmasSchema = new Schema({
  name: String,
  material: String,
  category: String,
  price: String,
  url: String,
  dimensions: Array,
  description: String,
  quantity: String,
});

christmasSchema.post("save", handleSaveError);

const ChristmasProduct = model("christmas-product", christmasSchema);

export default ChristmasProduct;
