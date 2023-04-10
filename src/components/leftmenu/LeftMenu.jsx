import React from "react";
import LogoImage from "../logo/logoimage/LogoImage";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

const LeftMenu = ({ className }) => {
  return (
    <div className={`left-menu ${className}`}>
      <div className="logo">
        <LogoImage />
      </div>
      <div className="menu-items">
        <Link to={"/"}>Recipes & Menus</Link>
        <Link to={"/"}>Expert Advice</Link>
        <Link to={"/"}>Ingredients</Link>
        <Link to={"/"}>Holidays & Events</Link>
        <Link to={"/"}>Video</Link>
      </div>
      <div className="menu-follow">
        <span>Follow Epicurious!</span>
        <div>
          <a
            href="https://www.linkedin.com/in/mykhailo-diatel-56a578242"
            className="menu-social"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/mihyiii"
            className="menu-social"
            target="_blank"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/misha_diatel/"
            className="menu-social"
            target="_blank"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
