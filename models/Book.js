import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const bookSchema = new Schema({
  name: {
    type: String,
  },
  ganre: {
    type: String,
  },
  price: {
    type: String,
  },
  url: { type: String },
  length: {
    type: String,
  },
  description: { type: String },
  quantity: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

bookSchema.post("save", handleSaveError);

const BookProduct = model("book-product", bookSchema);

export default BookProduct;
