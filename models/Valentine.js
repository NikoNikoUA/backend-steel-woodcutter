import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const valentineSchema = new Schema({
  name: String,
  material: String,
  category: String,
  price: String,
  url: String,
  dimensions: Array,
  description: String,
  quantity: String,
});

valentineSchema.post("save", handleSaveError);

const ValentineProduct = model("valentine-product", valentineSchema);

export default ValentineProduct;
