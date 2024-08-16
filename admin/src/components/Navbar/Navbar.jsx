/**
 * Overview: This is a React functional component that renders a simple navbar with a logo and a profile image.
 */

import React from "react";
import "./Navbar.css"; // Importing CSS styles for the navbar
import { assets } from "../../assets/assets"; // Importing assets (e.g. images) from a separate file

/**
 * Navbar component
 * @returns {JSX.Element} JSX element for the navbar
 */
const Navbar = () => {
  // Rendering the navbar component
  return (
    <div className="navbar">
      {" "}
      {/* Container element for the navbar */}
      <img className="logo" src={assets.logo} alt="" /> {/* Logo image */}
      <img className="profile" src={assets.profile_image} alt="" />{" "}
      {/* Profile image */}
    </div>
  );
};

export default Navbar; // Exporting the Navbar component as the default export
