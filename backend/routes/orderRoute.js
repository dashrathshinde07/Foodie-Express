import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

// Route for placing an order, requires authentication
orderRouter.post("/place", authMiddleware, placeOrder);

// Route for verifying an order payment
orderRouter.post("/verify", verifyOrder);

export default orderRouter; // Export the router
