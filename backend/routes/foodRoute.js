// foodRouter.js - This file defines the routes for food-related operations

import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Set up image storage engine using multer
const storage = multer.diskStorage({
  // Destination folder for uploaded images
  destination: "uploads",
  // Generate a unique filename for each uploaded image
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

// Create an instance of multer with the storage engine
const upload = multer({ storage: storage });

// Define routes for food operations
foodRouter.post("/add", upload.single("image"), addFood);
// Add a new food item with an image
foodRouter.get("/list", listFood);
// Retrieve a list of all food items
foodRouter.post("/remove", removeFood);
// Remove a food item

export default foodRouter;