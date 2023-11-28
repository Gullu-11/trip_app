import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./main.css";

const Main = () => {
  return (
    <div className="container">

    <div className="main">
      <div className="img">
        <img src="../images/Homepage.gif" alt="gif" />
      </div>
      <div className="all">
        <div className="text">
          <h3>We create trips you love</h3>
          <p>Trips you couldn't plan, even if you wanted to.</p>
        </div>
        <form action="action">
          <input
            className="img_input"
            type="search"
            placeholder="Where do you want to go?"
          />
          <button className="img_btn" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Main;
