import mongoose from "mongoose";

// Define the schema for orders
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, // User ID is required
  },
  items: {
    type: Array,
    required: true, // List of ordered items is required
  },
  amount: {
    type: Number,
    required: true, // Total order amount is required
  },
  address: {
    type: Object,
    required: true, // Delivery address is required
  },
  status: {
    type: String,
    default: "Food Processing", // Default order status
  },
  date: {
    type: Date,
    default: Date.now(), // Default to current date and time
  },
  payment: {
    type: Boolean,
    default: false, // Default to unpaid status
  },
});

// Create or retrieve the order model
const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel; // Export the order model
