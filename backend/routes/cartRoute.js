import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router(); // Initialize the router

// Route to add item to cart with authentication
cartRouter.post("/add", authMiddleware, addToCart);

// Route to remove item from cart with authentication
cartRouter.post("/remove", authMiddleware, removeFromCart);

// Route to get cart data with authentication
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter; // Export the router
