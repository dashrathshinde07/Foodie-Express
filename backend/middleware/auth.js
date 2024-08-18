import jwt from "jsonwebtoken";

// Middleware to authenticate user
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers; // Extract token from headers

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized, Login Again", // No token provided
    });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.body.userId = token_decode.id; // Attach user ID to request body
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error", // Error handling
    });
  }
};

export default authMiddleware; // Export the middleware
