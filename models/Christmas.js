import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const dms = ["height: ", "length: ", "width: "];
const categoryList = [
  "іграшка-пазл",
  "янгол",
  "ялинка",
  "янгол-метал",
  "ялинка-метал",
  "вертеп",
  "олень",
  "різдво",
];

const christmasSchema = new Schema({
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

christmasSchema.post("save", handleSaveError);

const ChristmasProduct = model("christmas-product", christmasSchema);

export default ChristmasProduct;
