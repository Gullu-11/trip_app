import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo_section">
       <img src="../images/Logo.png" alt="logo" />
        <p className="up">
          Discover the world's wonders and let us be <br /> your trusted guide
          to extraordinary destinations.
        </p>

        <p className="down">
          © Copyright 2023 Tourista Ltd. All Rights Reserved.
        </p>
      </div>

      <div className="menu">
        <h3>Menu</h3>
        <ul>
          <li>Destinations</li>
          <li>Private trips</li>
          <li>Blog</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="support">
        <h3>Support</h3>
        <ul>
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className="follow_us">
        <h3>Follow us</h3>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>TikTok</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
