import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Current from "../current/Current";

const Header = () => {
  return (
    <div className="header">
      <div className="nav_header">
        <ul>
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact us</Link>
          </li>
        </ul>
        <Current />
      </div>

      <div className="main_header">
        <div className="p_tag">
          <Link to="/Destination">Destinations</Link>
          <p>Private trips</p>
        </div>
        <div className="img">
          <Link to="/">
            <img src="../../images/Logo.png" alt="" />
          </Link>
        </div>
        <div className="buttons">
          <button>I'm Feeling Lucky</button>
          <Link to="/Sign">
            <button className="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
