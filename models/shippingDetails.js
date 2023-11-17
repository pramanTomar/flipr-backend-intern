import { Schema, model } from "mongoose";

const shippmentSchema = Schema({
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true,
    },
    purchase_order_id: {
        type: String,
        require: true,
    },
    customer_id: {
        type: String,
        require: true
    }
});

const ShippingDetails = model('shippingDetail', shippmentSchema);

export default ShippingDetails;