import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router(); // Initialize the router

// Route to handle user registration
userRouter.post("/register", registerUser);

// Route to handle user login
userRouter.post("/login", loginUser);

export default userRouter; // Export the router
