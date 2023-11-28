import React from "react";
import DestinationList from "../components/DestinationList/DestinationList";
import Header from "../components/header/Header";
import Join from "../components/join/Join";
import Dest from "../components/mainDest/Dest";
import Review2 from "../components/review2/Review2";
import Footer from "../components/footer/Footer";

const Destination = () => {
  return (
    <div>
      <Header />
      <Dest />
      <DestinationList />
      <Review2 />
      <Join />
      <Footer />
    </div>
  );
};

export default Destination;
