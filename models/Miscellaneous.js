import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const miscellaneousSchema = new Schema({
  name: String,
  material: String,
  category: String,
  price: String,
  url: String,
  dimensions: Array,
  description: String,
  quantity: String,
});

miscellaneousSchema.post("save", handleSaveError);

const MiscellaneousProduct = model(
  "miscellaneous-product",
  miscellaneousSchema
);

export default MiscellaneousProduct;
