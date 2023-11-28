import React from "react";
import Card from "../cardTrend/Card";
import "./destinationList.css";

const DestinationList = () => {
  return (
    <div className="all_destcard">
      <h2>Top Destinations</h2>
      <div className="only_cards">
        <Card
          image="./images/img13.png"
          p="ITALY TRIP"
          h4="International Italy"
          days="34 available trip plans"
          span = "From"
          price="$199.00"
          bookmark={false}
        />
        <Card
          image="./images/img14.png"
          p="PORTUGAL TRIP"
          h4="International Portugal"
          days="54 available trip plans"
          span = "From"
          price="$250.00"
          bookmark={false}
        />
        <Card
          image="./images/img15.png"
          p="TURKIYE TRIP"
          h4="International Turkiye"
          days="19 available trip plans"
          span = "From"
          price="$400.00"
          bookmark={false}
        />
        <Card
          image="./images/img16.png"
          p="ICELAND TRIP"
          h4="International Iceland"
          days="105 available trip plans"
          span = "From"
          price="$299.00"
          bookmark={false}
        />
        <Card
          image="./images/img17.png"
          p="COSTA RICA TRIP"
          h4="International Costa Rica"
          days="23 available trip plans"
          span = "From"
          price="$250.00"
          bookmark={false}
        />
        <Card
          image="./images/img18.png"
          p="ARGENTINA TRIP"
          h4="International Argentina"
          days="87 available trip plans"
          span = "From"
          price="$400.00"
          bookmark={false}
        />
      </div>
    </div>
  );
};

export default DestinationList;
