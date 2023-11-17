import express from "express";
import {
  addCustomer,
  addPurchaseDetails,
  addShippingDetails,
  getCustomerWithOrdersAndShipments,
  getCustomersWithCityFilter,
  customer_all_purchaseOrder,
} from "../controllers/index.js";

const Router = express.Router();

// API 1
Router.post("/addCustomer", addCustomer);

// API 2
Router.post("/addPurchaseDetails", addPurchaseDetails);

// API 3
Router.post("/addShippingDetails", addShippingDetails);

// API 4
Router.get("/getCustomersWithCityFilter", getCustomersWithCityFilter);

// API 5
Router.get("/customer_all_purchaseOrder", customer_all_purchaseOrder);

// API 6
Router.get("/getCustomerWithOrdersAndShipments", getCustomerWithOrdersAndShipments);

export default Router;
