import { Schema, model } from "mongoose";
import { handleSaveError } from "./hook.js";

const bookSchema = new Schema({
  name: String,
  ganre: String,
  price: String,
  url: String,
  length: String,
  description: String,
});

bookSchema.post("save", handleSaveError);

const BookProduct = model("book-product", bookSchema);

export default BookProduct;
