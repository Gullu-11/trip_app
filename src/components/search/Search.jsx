import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

const Search = () => {
  return (
    <div className="search_section">
      <div className="body">
        <p>Looking to go elsewhere?</p>
        <button>
          Our destinations <FontAwesomeIcon icon={faAngleRight} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Search;
