import React from "react";
import styles from "./italypage.module.css";
import Card from "../cardTrend/Card";

const ItalyPage = () => {
  return (
    <div className={styles.italy_page}>
      <div className={styles.img_section}>
        <img className={styles.italy_img} src="./images/Italy.png" alt="" />
        <div className={styles.text}>
          <h4>Italy</h4>
          <p>Trips you couldn't plan, even if you wanted to.</p>
          <button>Create a trip</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.mini_img}>
            <img src="./images/calendar.png" alt="" />

            <div className={styles.mini_img_text}>
              <h6>BEST TIME TO VISIT</h6>
              <p>High s/ May-Sept</p>
            </div>
          </div>
          <div className={styles.mini_img}>
            <img src="./images/sun.png" alt="" />

            <div className={styles.mini_img_text}>
              <h6>CLIMATE</h6>
              <p>
                High 32°C <br />
                Low 0°C
              </p>
            </div>
          </div>
          <div className={styles.mini_img}>
            <img src="./images/earth.png" alt="" />

            <div className={styles.mini_img_text}>
              <h6>TIMEZONE</h6>
              <p>
                Central European <br />
                Time (UTC +1)
              </p>
            </div>
          </div>
          <div className={styles.mini_img}>
            <img src="./images/dollar.png" alt="" />

            <div className={styles.mini_img_text}>
              <h6>CURRENCY</h6>
              <p>
                Euro <br />
                Dollar
              </p>
            </div>
          </div>
          <div className={styles.mini_img}>
            <img src="./images/local.png" alt="" />

            <div className={styles.mini_img_text}>
              <h6>LOCAL LANGUAGE</h6>
              <p>
                Italian <br />
                English
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="all_destcard">
        <h2>Available trips</h2>
        <div className="only_cards">
          <Card
            image="./images/img24.png"
            p="ITALY TRIP"
            h4="Roma"
            days="34 available trip plans"
            span="Starts from"
            price="$199.00"
            bookmark={false}
          />
          <Card
            image="./images/img25.png"
            p="PORTUGAL TRIP"
            h4="Roma"
            days="54 available trip plans"
            span="Starts from"
            price="$250.00"
            bookmark={false}
          />
          <Card
            image="./images/img26.png"
            p="TURKEY TRIP"
            h4="Foodie Puglia"
            days="19 available trip plans"
            span="Starts from"
            price="$400.00"
            bookmark={false}
          />
          <Card
            image="./images/img27.png"
            p="ICELAND TRIP"
            h4="Foodie Puglia"
            days="105 available trip plans"
            span="Starts from"
            price="$299.00"
            bookmark={false}
          />
          <Card
            image="./images/img28.png"
            p="COSTA RICA TRIP"
            h4="Foodie Puglia"
            days="23 available trip plans"
            span="Starts from"
            price="$250.00"
            bookmark={false}
          />
          <Card
            image="./images/img29.png"
            p="ARGENTINA TRIP"
            h4="Foodie Puglia"
            days="87 available trip plans"
            span="Starts from"
            price="$400.00"
            bookmark={false}
          />
        </div>
      </div>
      <div className={styles.map_italy}>
        <div>
          <img className={styles.map} src="./images/mapItaly.png" alt="" />
        </div>
        <div className={styles.head_text}>
          <p>Tops things to do</p>
          <div className={styles.btns}>
            <button>
              <img src="./images/btnLeft.png" alt="" />
            </button>
            <button>
              <img src="./images/btnRight.png" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.one_card}>
          <img src="./images/img30.png" alt="" />
          <div className={styles.one_card_p}>
            <p>
              Have the drive of your life on the cliff roads of the AAmalfi
              Coast
            </p>
          </div>
        </div>
      </div>
      <div className="all_destcard">
        <h2>Must-see attractions for your itinerary</h2>
        <div className="only_cards">
          <Card
            image="./images/img31.png"
            h4="Vatican museums"
            days="Founded by Pope Julius II in the 
            early 16th century …"
            bookmark={false}
          />
          <Card
            image="./images/img32.png"
            h4="Colosseum"
            days="Everyone wants to see the Colosseum, 
            and it doesn’t disappoint..."
            bookmark={false}
          />
          <Card
            image="./images/img33.png"
            h4="St Peter’s basilica"
            days="In the city of outstanding churches, 
            none can hold a candle…"
            bookmark={false}
          />
        </div>
      </div>
      <div className={styles.girl_img}>
        <img className={styles.italygirl} src="./images/italygirl.png" alt="" />
        <div className={styles.review_text}>
          <div className={styles.text1}>
            <p>
              We have a very good time all the way. The Capri boat ride is
              excellent and so much fun with the crew! They are awesome.
            </p>
          </div>
          <div className={styles.text2}>
            <img src="./images/hiking.png" alt="" />
            <div className={styles.name}>
              <p>Vivian Lim</p>
              <div>
                <img src="./images/Stars.png" alt="" />
                <span>|</span>
                <span>18 June 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItalyPage;
