import userModel from "../models/userModel.js";

// Add item to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId); // Find user by ID
    let cartData = userData.cartData; // Get user's cart data

    // Add item to cart or increase quantity
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1; // Add new item with quantity 1
    } else {
      cartData[req.body.itemId] += 1; // Increase item quantity
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData }); // Update user's cart

    res.json({
      success: true,
      message: "Added to Cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error", // Error handling
    });
  }
};

// Remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId); // Find user by ID
    let cartData = userData.cartData; // Get user's cart data

    // Reduce item quantity if it exists in the cart
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData }); // Update user's cart
    res.json({
      success: true,
      message: "Removed From Cart",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" }); // Error handling
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId); // Find user by ID
    let cartData = userData.cartData; // Get user's cart data

    res.json({
      success: true,
      cartData, // Return cart data
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error", // Error handling
    });
  }
};

export { addToCart, removeFromCart, getCart }; // Export functions
