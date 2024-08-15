import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
              Foodie-Express is your go-to food delivery app inspired by Zomato
              and Swiggy. We aim to provide a seamless experience for ordering
              food online with detailed menus, user reviews, secure payment, and
              real-time order tracking.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>

          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>

          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                    <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
                    <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Foodie St, Gourmet City, FL 12345</p>
            </ul>
          </div>
        </div>
        <hr />
        <p>&copy; 2024 Foodie-Express. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
