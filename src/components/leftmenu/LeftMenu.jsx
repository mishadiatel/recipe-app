import React from "react";
import LogoImage from "../logo/logoimage/LogoImage";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

const LeftMenu = ({ className }) => {
  const clickMenuItemsHamdler = () => {
    document.body.classList.toggle("blocked");
  };
  return (
    <div className={`left-menu ${className}`}>
      <div className="logo">
        <LogoImage />
      </div>
      <div className="menu-items">
        <Link to={"/search/none"} onClick={clickMenuItemsHamdler}>
          Recipes & Menus
        </Link>
        <Link to={"/search/advice"} onClick={clickMenuItemsHamdler}>
          Expert Advice
        </Link>
        <Link to={"/search/ingredients"} onClick={clickMenuItemsHamdler}>
          Ingredients
        </Link>
        <Link to={"/search/garnish"} onClick={clickMenuItemsHamdler}>
          Garnish
        </Link>
      </div>
      <div className="menu-follow">
        <span>Follow Epicurious!</span>
        <div>
          <a
            href="https://www.linkedin.com/in/mykhailo-diatel-56a578242"
            className="menu-social"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/mihyiii"
            className="menu-social"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/misha_diatel/"
            className="menu-social"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
