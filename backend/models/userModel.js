import mongoose from "mongoose";

// Define the schema for users
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true,   // Email must be unique
    },
    password: {
      type: String,
      required: true, // Password is required
    },
    cartData: {
      type: Object,
      default: {}, // Default empty object for cart data
    },
  },
  { minimize: false } // Prevent mongoose from removing empty objects
);

// Create or retrieve the user model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel; // Export the user model
