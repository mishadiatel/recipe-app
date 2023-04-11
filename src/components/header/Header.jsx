import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

import LeftMenu from "../leftmenu/LeftMenu";

import LogoText from "../logo/logotext/LogoText";

const Header = () => {
  const [logoColor, setLogoColor] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const colorValue = style.getPropertyValue("--orange-color");
    setLogoColor(colorValue);
  }, []);

  const clickBurgerHaandler = () => {
    setIsBurgerOpen((state) => !state);
    document.body.classList.toggle("blocked");
  };
  return (
    <header className={"header"}>
      <button className="burger-button" onClick={clickBurgerHaandler}>
        {isBurgerOpen ? <CgClose /> : <BiMenu />}
      </button>
      <LeftMenu className={`${!isBurgerOpen ? "hidden-menu" : ""}`} />
      <Link to={"/"}>
        <LogoText color={logoColor} />
      </Link>
      <div className={"header-right"}>
        <div className={"follow"}>
          <span>Follow</span>
          <a
            href="https://www.linkedin.com/in/mykhailo-diatel-56a578242"
            className="social"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/mihyiii"
            className="social"
            rel="noreferrer"
            target="_blank"
          >
            <FaTelegram />
          </a>
          <a
            href="https://google.com"
            className="social"
            rel="noreferrer"
            target="_blank"
          >
            <FiInstagram />
          </a>
        </div>
        <div className={"header-search"}>
          <Link to={"/search/none"}>
            <span>Search</span>
            <BiSearch />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
