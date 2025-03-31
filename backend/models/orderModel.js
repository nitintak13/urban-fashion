import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: String, required: true },
  amount: { type: Number, required: true },
  address: { type: Array, required: true },
  status: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  payment: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
});

// const productModel =
//   mongoose.models.product || mongoose.model("product", productSchema);
// export default productModel;
