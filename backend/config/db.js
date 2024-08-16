// This file exports a function to connect to the MongoDB database

// Import the mongoose library, which is a MongoDB ORM (Object Relational Mapping) tool
import mongoose from "mongoose";

// Import the dotenv library, which loads environment variables from a .env file
import dotenv from "dotenv";

// Load the environment variables from the .env file
dotenv.config();

// Export a function to connect to the database
export const connectDB = async () => {
  // Use mongoose.connect() to establish a connection to the database
  // The await keyword is used to wait for the promise to resolve
  await mongoose
    .connect(
      // The connection string for the MongoDB Atlas cluster is stored in an environment variable called DATABASE_URL
      process.env.DATABASE_URL
    )
    .then(() => {
      // If the connection is successful, log a success message to the console
      console.log("DB Connected !");
    });
};