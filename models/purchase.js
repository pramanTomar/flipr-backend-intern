import mongoose, { Schema, model } from "mongoose";
const purchaseSchema = Schema({
  product_name: {
    type: String,
    require: true,
  },
  pricing: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  mrp: {
    type: Number,
    require: true,
  },
  purchase_order_id: {
    type: String,
    default: new mongoose.Types.ObjectId(),
    require: true,
  },
  customer_id: {
    type: String,
    require: true,
  },
});
const PurchaseDetails = mongoose.model("purchase", purchaseSchema);
export default PurchaseDetails;
