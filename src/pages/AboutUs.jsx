import React from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Join from "../components/join/Join";
import Local from "../components/local/Local";
import Search from "../components/search/Search";
import WhyUs from "../components/whyUs/WhyUs";
import Footer from "../components/footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <About />
      <WhyUs />
      <Local />
      <Search />
      <Join />
      <Footer />
    </div>
  );
};

export default AboutUs;
