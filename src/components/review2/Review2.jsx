import "./review2.css";

const Review2 = () => {
  return (
    <div className="review_section">
      <img src="./images/image.png" alt="" />
      <div className="review_text">
        <div className="first_text">
          <h5>
            “Tiago put together an epic itinerary for me and my friends. He
            showed us some hidden hiking trails and amazing local food spots. He
            even met us for a coffee to make sure we had everything we needed.
          </h5>
          <h5 className="h5_2">
            {" "}
            <b> Thanks Tiago!”</b>
          </h5>
          <p>Charlie, rappelling down a 370-foot waterfall</p>
          <p className="p_2">The Azores</p>
        </div>
        <div className="info">
          <img className="hiking" src="./images/hiking.png" alt="" />
          <div className="info_text">
            <p>Trip crafted by</p>
            <p className="p_bottom">
              <b>Tiago</b> <span>| Local expert in Portugal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review2;
