import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Join from "../components/join/Join";
import Search from "../components/search/Search";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Search />
      <Join />
      <Footer />
    </div>
  );
};

export default ContactUs;
