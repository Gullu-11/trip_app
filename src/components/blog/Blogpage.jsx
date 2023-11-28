import React from "react";
import "./blogpage.css";

const Blogpage = () => {
  return (
    <div className="blog">
      <img className="fly" src="./images/fly.png" alt="" />
      <div className="fly_text">
        <h4>Blog</h4>
        <p>Blog articles for "Inspiration".</p>
      </div>
      <div className="categories">
        <button className="first">All articles</button>
        <button>Food & Drink</button>
        <button>Inspiration</button>
        <button>Local Guides</button>
        <button>See & Do</button>
        <button>Travel Tips</button>
        <button>Where to stay</button>
      </div>
      <div className="trip_section">
        <div className="first_img_section">
          <div>
            <img src="./images/img19.png" alt="" />
            <h6>Food & Drink</h6>
            <p>
              Founded by Pope Julius II in the early 16th century and enlarged
              by successive pontiffs, the Vatican…
            </p>
          </div>
          <div>
            <img src="./images/img20.png" alt="" />
            <h6>See & Do</h6>
            <p>
              Everyone wants to see the Colosseum, and it doesn’t disappoint,
              especially if accompanied by...
            </p>
          </div>
        </div>
        <div className="second_img_section">
          <div>
            <img src="./images/img21.png" alt="" />
            <h6>Inspiration</h6>
            <p>
              Founded by Pope Julius II in the early 16th century and enlarged
              by successive pontiffs, the Vatican…
            </p>
          </div>
          <div>
            <img src="./images/img22.png" alt="" />
            <h6>Travel Tips</h6>
            <p>
              Everyone wants to see the Colosseum, and it doesn’t disappoint,
              especially if accompanied by...
            </p>
          </div>
          <div>
            <img src="./images/img23.png" alt="" />
            <h6>Food & Drink</h6>
            <p>
              In the city of outstanding churches, none can hold a candle to St
              Peter's, Italy’s largest, richest and…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
