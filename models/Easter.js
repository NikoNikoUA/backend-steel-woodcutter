import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const dms = ["height: ", "length: ", "width: "];
const categoryList = ["іграшка-пазл", "заєць", "пасха"];

const easterSchema = new Schema({
  name: {
    type: String,
  },
  material: {
    type: String,
  },
  category: {
    type: String,
    enum: categoryList,
  },
  price: {
    type: String,
  },
  url: {
    type: String,
  },
  dimensions: {
    type: String,
    enum: dms,
  },
  description: {
    type: String,
  },
  quantity: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

easterSchema.post("save", handleSaveError);

const EasterProduct = model("easter-product", easterSchema);

export default EasterProduct;
