import { Schema, model } from "mongoose";
import { addUpdateSettings, handleSaveError } from "./hook.js";

const favoriteSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "productType", // Динамічний референс на основі productType
    },
    productType: {
      type: String,
      enum: [
        "christmas-product",
        "book-product",
        "easter-product",
        "miscellaneous-product",
        "valentine-product",
      ],
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

favoriteSchema.post("save", handleSaveError);

favoriteSchema.pre("findOneAndUpdate", addUpdateSettings);

favoriteSchema.post("findOneAndUpdate", handleSaveError);

const Favorite = model("favorite", favoriteSchema);

export default Favorite;
