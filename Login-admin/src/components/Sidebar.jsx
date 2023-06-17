import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  // FaShoppingBag,
  // FaThList
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },

    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/gallery",
      name: "Gallery",
      icon: <FaRegChartBar />,
    },
    {
      path: "/jurusan",
      name: "Jurusan",
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar border-2 bg-white text-black"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars text-black"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon text-black">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text text-black"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
