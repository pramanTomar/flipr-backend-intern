import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const customerSchema = Schema({
  customer_id: {
    type: String,
    default: new mongoose.Types.ObjectId(),
    unique: true,
  },
  customer_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
});

const CustomerDetails = model("customer", customerSchema);

export default CustomerDetails;
