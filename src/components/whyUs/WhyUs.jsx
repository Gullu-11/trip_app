import React from "react";
import "./whyUs.css";

const whyUs = () => {
  return (
    <div className="whyUs_section">
      <div className="whyUs_container">
        <h3>Why us?</h3>
        <div className="text_section">
          <div className="whyUs_item">
            <img src="./images/location.png" alt="" />
            <p>More than 149 travel titles currently in print</p>
          </div>
          <div className="whyUs_item">
            <img src="./images/favorite.png" alt="" />
            <p>Supporting millions of travellers since 1982</p>
          </div>
          <div className="whyUs_item">
            <img src="./images/baggage.png" alt="" />
            <p>Our utstanding customer satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whyUs;
