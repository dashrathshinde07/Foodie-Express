// db.js - This file exports a function to connect to the MongoDB database

import mongoose from "mongoose";

// Export a function to connect to the database
export const connectDB = async () => {
  // Use mongoose.connect() to establish a connection to the database
  await mongoose.connect(
    // Connection string for the MongoDB Atlas cluster
    "mongodb+srv://dashrathbshinde:dashrath@cluster0.xgxtuqr.mongodb.net/Foodie-Express-Database"
  )
  .then(() => {
    // Log a success message to the console when the connection is established
    console.log("DB Connected !");
  });
};