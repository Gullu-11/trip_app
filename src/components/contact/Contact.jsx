import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img className="girl" src="./images/girl.png" alt="" />
      <div className="girl_text">
        <h4>Contact us</h4>
        <p>Your Journey Begins with a Conversation - Reach Out to Us Today!</p>
      </div>
      <div className="all_contact">
        <div className="commercial">
          <h5>Commercial Contacts</h5>
          <div>
            <p>To advertise on Tourista:</p>
            <a href="#">advertise@tourista.com</a>
          </div>
          <div>
            <p>To become an affiliate partner:</p>
            <a href="#">affiliate@tourista.com</a>
          </div>
          <div>
            <p>To contact the hotels team:</p>
            <a href="#">hotels@tourista.com</a>
          </div>
          <div>
            <p>Send your request to republish Tourista content:</p>
            <a href="#">contentlicensing@tourista.com</a>
          </div>
          <div>
            <p>To contact the experiences team:</p>
            <a href="#">experiences@tourista.com</a>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h5>Content Contact</h5>
            <div>
              <p>To report an issue to our content teams please contact: </p>
              <a href="#">corrections@tourista.com</a>
            </div>
          </div>
          <div className="press">
            <h5>Press Contact</h5>
            <div>
              <p>
                If you’re a journalist / influencer with a press enquiry about
                Tourista, please contact our press office:{" "}
              </p>
              <a href="#">pr@tourista.com</a>
            </div>
          </div>
          <div className="partner">
            <h5>Partnership Contact</h5>
            <div>
              <p>For partnership opportunities: </p>
              <a href="#">partnerships@tourista.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
