import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

// Route for placing an order, requires authentication
orderRouter.post("/place", authMiddleware, placeOrder);

// Route for verifying an order payment
orderRouter.post("/verify", verifyOrder);

//Route for user's order
orderRouter.post("/userorders", authMiddleware, userOrders);

//Route for get all orders in admin panel
orderRouter.get("/list", listOrders);

//Route for update status of order
orderRouter.post("/status", updateStatus);

export default orderRouter; // Export the router
