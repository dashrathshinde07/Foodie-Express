// foodController.js
// This file contains the controller functions for handling food-related operations, including adding, listing, and removing food items from the database. It interacts with the food model and handles file system operations for image deletion.

import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add a new food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`; // Get the uploaded image filename

  // Create a new food item document
  const food = new foodModel({
    name: req.body.name, // Food name
    description: req.body.description, // Food description
    price: req.body.price, // Food price
    category: req.body.category, // Food category
    image: image_filename, // Image filename
  });

  try {
    await food.save(); // Save the food item to the database
    res.json({
      success: true,
      message: "Food Added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// Get the list of all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}); // Retrieve all food items from the database
    res.json({
      success: true,
      data: foods, // Send the food items data in response
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// Remove a food item by ID
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id); // Find the food item by ID
    fs.unlink(`uploads/${food.image}`, () => {}); // Delete the associated image file
    await foodModel.findByIdAndDelete(req.body.id); // Remove the food item from the database
    res.json({
      success: true,
      message: "Food Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export { addFood, listFood, removeFood }; // Export controller functions for use in routes
