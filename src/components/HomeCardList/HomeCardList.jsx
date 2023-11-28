import Card from "../cardTrend/Card";
import "../cardTrend/card.css";
import styles from "./HomeCardList.module.css";

export default function Trend() {
  return (
    <div className={styles.container}>
      <h3 className={styles.card_h3}>Trending now</h3>
      <div className={styles.cardSection}>
        <Card
          image="./images/img1.png"
          sparkle="./images/sparkles.svg"
          text="Loved by over 40s"
          save="./images/save.png"
          p="SPAIN TRIP"
          h4="Magical Madrid To Marrakech By Train"
          days="12 days"
          price="$1299.00"
          showButton={true}
        />
        <Card
          image="./images/img2.png"
          sparkle="./images/heart.svg"
          text="Loved by couples"
          save="./images/save.png"
          p="ITALY TRIP"
          h4="Spectacular Sicily"
          days="5 days"
          price="$250.00"
          showButton={true}
        />
        <Card
          image="./images/img3.png"
          save="./images/save.png"
          p="TURKEY TRIP"
          h4="International Istanbul"
          days="7 days"
          price="$400.00"
        />
      </div>
    </div>
  );
}

export function Brand() {
  return (
    <div className={styles.container}>
      <h3 className={styles.card_h3}>Brand new trips</h3>
      <div className={styles.cardSection}>
        <Card
          image="./images/img4.png"
          save="./images/save.png"
          p="SPAIN TRIP"
          h4="Magical Madrid To Marrakech By Train"
          days="12 days"
          price="$1299.00"
        />
        <Card
          image="./images/img5.png"
          save="./images/save.png"
          p="ITALY TRIP"
          h4="Spectacular Sicily"
          days="5 days"
          price="$250.00"
        />
        <Card
          image="./images/img6.png"
          save="./images/save.png"
          p="TURKEY TRIP"
          h4="International Istanbul"
          days="7 days"
          price="$400.00"
        />
      </div>
    </div>
  );
}

export function Europe() {
  return (
    <div className={styles.container}>
      <h3 className={styles.card_h3}>Europe</h3>
      <div className={styles.cardSection}>
        <Card
          image="./images/img7.png"
          save="./images/save.png"
          p="ICELAND TRIP"
          h4="Volcanic Iceland"
          days="7 days"
          price="$2299.00"
        />
        <Card
          image="./images/img8.png"
          save="./images/save.png"
          p="SCOTLAND TRIP"
          h4="The Scottish Highlands"
          days="7 days"
          price="$1687.00"
        />
        <Card
          image="./images/img9.png"
          save="./images/save.png"
          p="PORTUGAL TRIP"
          h4="Atlantic Azores"
          days="6 days"
          price="$1220.00"
        />
      </div>
    </div>
  );
}

export function Asia() {
  return (
    <div className={styles.container}>
      <h3 className={styles.card_h3}>Asia</h3>
      <div className={styles.cardSection}>
        <Card
          image="./images/img10.png"
          save="./images/save.png"
          p="CHINA TRIP"
          h4="Icons Of China"
          days="5 days"
          price="$1399.00"
        />
        <Card
          image="./images/img11.png"
          save="./images/save.png"
          p="THAILAND TRIP"
          h4="Cambodia & Vietnam"
          days="7 days"
          price="$2350.00"
        />
        <Card
          image="./images/img12.png"
          save="./images/save.png"
          p="TAIWAN TRIP"
          h4="A Taste Of Taiwan"
          days="7 days"
          price="$1900.00"
        />
      </div>
    </div>
  );
}
