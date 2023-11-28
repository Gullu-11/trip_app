import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Trend, {
  Asia,
  Brand,
  Europe,
} from "../components/HomeCardList/HomeCardList";
import Join from "../components/join/Join";
import Local from "../components/local/Local";
import Main from "../components/main/Main";
import Review from "../components/reviews/Review";
import Search from "../components/search/Search";
import UpTo from "../components/upTo/UpTo";
import WhyUs from "../components/whyUs/WhyUs";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Main />
      <Trend />
      <Brand />
      <WhyUs />
      <Local />
      <Review />
      <Europe />
      <Asia />
      <Search />
      <Join />
      <UpTo />
      <Footer />
    </div>
  );
};

export default Home;
