// foodModel.js - This file defines the Mongoose model for food items

import mongoose, { Schema } from "mongoose";

// Define the food schema
const foodSchema = new mongoose.Schema({
  // Name of the food item (required)
  name: {
    type: String,
    required: true,
  },
  // Description of the food item (required)
  description: {
    type: String,
    required: true,
  },
  // Price of the food item (required)
  price: {
    type: Number,
    required: true,
  },
  // Image of the food item (required)
  image: {
    type: String,
    required: true,
  },
  // Category of the food item (required)
  category: {
    type: String,
    required: true,
  },
});

// Create the food model or retrieve it if it already exists
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

// Export the food model
export default foodModel;