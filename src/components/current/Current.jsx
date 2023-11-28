import React, { useState } from "react";
import "./current.css"; 

const Current = () => {
  const [showCurrencies, setShowCurrencies] = useState(false);

  const handleImageClick = () => {
    setShowCurrencies(!showCurrencies);
  };

  return (
    <div className="valute">
      <span className="val_span">US$</span>
      <img
        src="../images/Unfold_more.svg"
        alt="up-down"
        onClick={handleImageClick}
      />

      {showCurrencies && (
        <div className="currencyDropdown">
          <p>Euro€</p>
          <p>Azn₼</p>
        </div>
      )}
    </div>
  );
};

export default Current;
