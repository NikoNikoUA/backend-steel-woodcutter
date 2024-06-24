import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const valentineSchema = new Schema({
  name: String,
  material: String,
  category: String,
  price: String,
  url: String,
  dimensions: String,
  description: String,
});

valentineSchema.post("save", handleSaveError);

const ValentineProduct = model("valentine-product", valentineSchema);

export default ValentineProduct;
