import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  sizes: [String],
  colors: [String],
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
