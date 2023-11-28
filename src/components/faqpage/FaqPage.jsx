import React, { useState } from "react";
import "./faqpage.css";

const FaqPage = () => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };
  return (
    <div className="faq">
      <img className="friends2" src="./images/friends2.png" alt="" />
      <div className="img_text2">
        <h4>FAQ</h4>
        <p>Unlocking the Mysteries of Travel: Your Questions, Our Journey.</p>
      </div>
      <div className="all_content">
        <div className="question_container">
          <div>
          <h6>01</h6>
          </div>
          <div className="h5_p">
          <h5>
            What are the best tips for finding budget-friendly travel
            accommodations?
            </h5>
          {showText && (
            <p>
              To discover budget-friendly accommodations, consider the following
              tips: Book in Advance: Reserving your accommodations well in
              advance often results in better deals. Comparison Sites: Utilize
              travel comparison websites to find competitive prices from various
              providers. Off-Peak Travel: Consider traveling during off-peak
              seasons for reduced rates. Hostels and Guesthouses: These can be
              more economical than hotels, especially for solo travelers.
              Rewards Programs: Sign up for loyalty programs to accumulate
              points and receive discounts. Local Recommendations: Seek advice
              from locals or fellow travelers for hidden gems that are easy on
              the wallet.
            </p>
          )}
          </div>
          <div>
          <button onClick={toggleText}>{showText ? "x" : "+"}</button>
          </div>
        </div>
        <div className="question_container">
          <div>
          <h6>02</h6>
          </div>
          <div className="h5_p">
          <h5>How can I find authentic local experiences when traveling?</h5>
          {showText && (
            <p>
              To discover budget-friendly accommodations, consider the following
              tips: Book in Advance: Reserving your accommodations well in
              advance often results in better deals. 
            </p>
          )}
          </div>
          <div>
          <button onClick={toggleText}>{showText ? "x" : "+"}</button>
          </div>
        </div>
        <div className="question_container">
          <div>
          <h6>03</h6>
          </div>
          <div className="h5_p">
          <h5>How can I find authentic local experiences when traveling?</h5>
          {showText && (
            <p>
              To discover budget-friendly accommodations, consider the following
              tips: Book in Advance: Reserving your accommodations well in
              advance often results in better deals. Comparison Sites: Utilize
              travel comparison websites to find competitive prices from various
              providers. Off-Peak Travel: Consider traveling during off-peak
              seasons for reduced rates. 
            </p>
          )}
          </div>
          <div>
          <button onClick={toggleText}>{showText ? "x" : "+"}</button>
          </div>
        </div>
        <div className="question_container">
          <div>
          <h6>04</h6>
          </div>
          <div className="h5_p">
          <h5>How can I find authentic local experiences when traveling?</h5>
          {showText && (
            <p>
              To discover budget-friendly accommodations, consider the following
              tips: Book in Advance: Reserving your accommodations well in
              advance often results in better deals. Comparison Sites: 
            </p>
          )}
          </div>
          <div>
          <button onClick={toggleText}>{showText ? "x" : "+"}</button>
          </div>
        </div>
        <div className="question_container">
          <div>
          <h6>05</h6>
          </div>
          <div className="h5_p">
          <h5>How can I find authentic local experiences when traveling?</h5>
          {showText && (
            <p>
              To discover budget-friendly accommodations, consider the following
              tips: Book in Advance: Reserving your accommodations well in
              advance often results in better deals. Comparison Sites: Utilize
              travel comparison websites to find competitive prices from various
              providers. Off-Peak Travel:
            </p>
          )}
          </div>
          <div>
          <button onClick={toggleText}>{showText ? "x" : "+"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
