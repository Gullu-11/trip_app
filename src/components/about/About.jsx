import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutUs">
      <img className="friends" src="./images/friends.png" alt="" />
      <div className="img_text">
        <h4>About us</h4>
        <p>Discover Our Passion for Travel and Adventure.</p>
      </div>
      <div className="only_text">
        <h5>Changing how the world travels</h5>
        <p>
          We’re on a journey to transform ordinary trips into extraordinary
          ones. We are your guide, bringing you personal experiences. Wherever
          your travels take you, we’ll show you the unique and unmissable things
          to do in your destination. With GetYourGuide on your side (and in your
          pocket), creating memorable moments has never been easier. Today,
          millions have used GetYourGuide to turn their travel dreams into
          reality. And we’re just getting started. We're changing the way people
          connect to the places they visit so anyone can create their dream
          vacation. It’s your journey, your way.
        </p>
      </div>
    </div>
  );
};

export default About;
