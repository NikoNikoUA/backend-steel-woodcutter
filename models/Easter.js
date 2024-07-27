import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const easterSchema = new Schema({
  name: String,
  material: String,
  category: String,
  price: String,
  url: String,
  dimensions: Array,
  description: String,
  quantity: String,
});

easterSchema.post("save", handleSaveError);

const EasterProduct = model("easter-product", easterSchema);

export default EasterProduct;
