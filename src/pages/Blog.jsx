import React from "react";
import Blogpage from "../components/blog/Blogpage";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Join from "../components/join/Join";
import Search from "../components/search/Search";

const Blog = () => {
  return (
    <div>
      <Header />
      <Blogpage />
      <Search />
      <Join/>
      <Footer/>
    </div>
  );
};

export default Blog;
