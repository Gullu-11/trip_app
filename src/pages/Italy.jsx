import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ItalyPage from "../components/italyPage/ItalyPage";
import Join from "../components/join/Join";
import Reason from "../components/reason/Reason";
import Search from "../components/search/Search";

const Italy = () => {
  return (
    <div>
      <Header />
      <ItalyPage />
      <Reason />
      <Search />
      <Join />
      <Footer/>
    </div>
  );
};

export default Italy;
