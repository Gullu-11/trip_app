import React from "react";
import "./local.css";

const Local = () => {
  return (
    <div className="local">
      <div className="local_section">
        <h3>Our Local Experts</h3>
        <div className="img_all">
          <div className="img1">
            <img className="vector1" src="./images/text1.png" alt="" />
            <img src="./images/Callcenter.png" alt="" />
          </div>
          <div className="img2">
            <img src="./images/selfie.png" alt="" />
            <img className="vector2" src="./images/text2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Local;
