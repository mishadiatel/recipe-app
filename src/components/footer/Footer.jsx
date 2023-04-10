import React from "react";
import "./Footer.css";
import LogoCondenast from "../logo/logocondenast/LogoCondenast";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__top-left">
            <LogoCondenast />
          </div>
          <div className="footer__top-right">
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Condé Nast Store</a>
              </li>
              <li>
                <a href="/">Reprints/Permissions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © 2023 Condé Nast. All rights reserved. Use of and/or registration
            on any portion of this site constitutes acceptance of our User
            Agreement (updated as of 1/1/21) and Privacy Policy and Cookie
            Statement (updated as of 1/1/21). Your California Privacy Rights.
            The material on this site may not be reproduced, distributed,
            transmitted, cached or otherwise used, except with the prior written
            permission of Condé Nast. Ad Choices
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
