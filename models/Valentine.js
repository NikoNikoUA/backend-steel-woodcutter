import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const dms = ["height: ", "length: ", "width: "];
const categoryList = ["день валентина", "іграшка-пазл"];

const valentineSchema = new Schema({
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

valentineSchema.post("save", handleSaveError);

const ValentineProduct = model("valentine-product", valentineSchema);

export default ValentineProduct;
