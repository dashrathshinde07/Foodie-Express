import React, { useContext, useEffect } from "react";
import "./Verify.css"; // Importing the CSS for styling
import { useNavigate, useSearchParams } from "react-router-dom"; // React Router hooks for navigation and query parameters
import { StoreContext } from "../../context/StoreContext"; // Importing context for global state management
import axios from "axios"; // Importing axios for making HTTP requests

const Verify = () => {
  const [searchParams, setSearchparams] = useSearchParams(); // Hook to get query parameters from the URL
  const success = searchParams.get("success"); // Retrieve the 'success' parameter from the URL
  const orderId = searchParams.get("orderId"); // Retrieve the 'orderId' parameter from the URL
  console.log(success, orderId); // Log the success status and orderId for debugging
  const { url } = useContext(StoreContext); // Get the base URL from the global context
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to verify payment status with the backend
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders"); // Navigate to the orders page on successful payment
    } else {
      navigate("/"); // Navigate to the homepage on failed payment
    }
  };

  useEffect(() => {
    verifyPayment(); // Verify payment when the component mounts
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="verify">
      <div className="spinner"></div> {/* Display a spinner while verifying */}
    </div>
  );
};

export default Verify; // Export the Verify component
