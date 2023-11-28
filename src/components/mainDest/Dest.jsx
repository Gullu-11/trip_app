import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./mainDest.css";

const Dest = () => {
  return (
    <div>
      <div className="main_img">
        <img src="./images/Destinations.gif" alt="" />
        <div className="img_text">
          <h5>Explore places on Tourista</h5>
          <p>Destinations</p>
        </div>
      </div>
      <div className="destinations_section">
        <div className="city">
          <div className="Europe">
            <h4>Europe</h4>
            <ul>
              <li>Azores</li>
              <li>Croatia</li>
              <li>Georgia</li>
              <li>Germany</li>
              <li>Greece</li>
              <li>Iseland</li>
              <li>Ireland</li>
              <li>
                <Link to="/Italy">Italy</Link>{" "}
              </li>
              <li>Portugal</li>
              <li>Scotland</li>
              <li>Spain</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div className="Asia">
            <h4>Asia</h4>
            <ul>
              <li>Azores</li>
              <li>Croatia</li>
              <li>Georgia</li>
              <li>Germany</li>
              <li>Greece</li>
              <li>Iseland</li>
              <li>Ireland</li>
              <li>Italy</li>
              <li>Portugal</li>
              <li>Scotland</li>
              <li>Spain</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div className="Africa">
            <h4>Africa</h4>
            <ul>
              <li>Azores</li>
              <li>Croatia</li>
              <li>Georgia</li>
              <li>Germany</li>
              <li>Greece</li>
              <li>Iseland</li>
              <li>Ireland</li>
              <li>Italy</li>
              <li>Portugal</li>
              <li>Scotland</li>
              <li>Spain</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div className="cAmerica">
            <h4>C/America</h4>
            <ul>
              <li>Azores</li>
              <li>Croatia</li>
              <li>Georgia</li>
              <li>Germany</li>
              <li>Greece</li>
              <li>Iseland</li>
              <li>Ireland</li>
              <li>Italy</li>
              <li>Portugal</li>
              <li>Scotland</li>
              <li>Spain</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div className="sAmerica">
            <h4>S/America</h4>
            <ul>
              <li>Azores</li>
              <li>Croatia</li>
              <li>Georgia</li>
              <li>Germany</li>
              <li>Greece</li>
              <li>Iseland</li>
              <li>Ireland</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dest;
