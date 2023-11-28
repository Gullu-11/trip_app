import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./upto.css";

const UpTo = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="upTo" onClick={handleScrollToTop}>
      <button>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default UpTo;