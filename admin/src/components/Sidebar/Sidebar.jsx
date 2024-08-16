/**
 * Sidebar Component
 * 
 * This component renders a sidebar with navigation links to different sections 
 * of the admin panel, including adding items, listing items, and viewing orders.
 */

import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        {/* Link to Add Items page */}
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="Add Icon" />
          <p>Add Items</p>
        </NavLink>

        {/* Link to List Items page */}
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="List Icon" />
          <p>List Items</p>
        </NavLink>

        {/* Link to Orders page */}
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="Orders Icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
