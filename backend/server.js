// server.js - This file sets up the Express.js server and configures the application

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";

// App configuration
const app = express();
const port = 4000;

// Middleware configuration
app.use(express.json()); // Enable JSON parsing for request bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Database connection
connectDB(); // Establish a connection to the database

// API endpoint configuration
app.use("/api/food", foodRouter); // Mount the food router at /api/food
app.use("/images", express.static("uploads")); // Serve static images from the uploads folder
app.use("/api/user", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("API WORKING"); // Return a success message for the root route
});

// Start the server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`); // Log a message when the server starts
});
