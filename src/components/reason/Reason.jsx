import React from "react";
import styles from "./reason.module.css";

const Reason = () => {
  return (
    <div className={styles.plan_trip_container}>
      <div className={styles.plan_trip}>
        <h4>Expert guidance to help you plan your trip</h4>
        <div className={styles.reason_section1}>
          <div className={styles.reason}>
            <img src="./images/tick.png" alt="" />
            <div>
              <h6>Best Things to Do</h6>
              <p>
                Italy has so many delights to offer its visitors, it's hard to
                know where to start. Here's our pick of the best experiences
                Italy has to offer you.
              </p>
            </div>
          </div>
          <div className={styles.reason}>
            <img src="./images/lamp.png" alt="" />
            <div>
              <h6>Things to Know</h6>
              <p>
                With so many attractions, it's hard to know where to begin with
                a trip to Italy. Here's some local insight into the essential
                things to know before you go.
              </p>
            </div>
          </div>
          <div className={styles.reason}>
            <img src="./images/bus.png" alt="" />
            <div>
              <h6>Transportation</h6>
              <p>
                Your guide to traveling independently across Italy, from the
                Alps to the islands.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.reason_section2}>
          <div className={styles.reason}>
            <img src="./images/jurnal.png" alt="" />
            <div>
              <h6>Visa Requirements</h6>
              <p>
                Italy is one of the most visited countries in Europe and its
                many attractions are hard to resist. Find out if you need a visa
                before you go.
              </p>
            </div>
          </div>
          <div className={styles.reason}>
            <img src="./images/money.png" alt="" />
            <div>
              <h6>Money and Costs</h6>
              <p>
                These top budget tips can help you save money while exploring
                Italy.
              </p>
            </div>
          </div>
          <div className={styles.reason}>
            <img src="./images/child.png" alt="" />
            <div>
              <h6>Traveling with Kids</h6>
              <p>
                Experience the best of Italy as a family with this guide to the
                top things to do there with kids.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
