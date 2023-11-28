import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="img_section">
        <div className="img">
          <img src={props.image} alt="" />
          <div className="btns">
            {props.showButton && (
              <button className="fav_btn">
                <img src={props.sparkle} alt="" />
                {props.text}
              </button>
            )}
            {props.bookmark && (
              <button className="save_btn">
                <img src={props.save} alt="" />
              </button>
            )}
          </div>
        </div>
        <div className="bottom_text">
          <p>{props.p}</p>
          <h4>{props.h4}</h4>
          <div>
            <p>{props.days}</p>
            <span>
              {props.span} <b>{props.price}</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  showButton: false,
  bookmark: true,
};

export default Card;
