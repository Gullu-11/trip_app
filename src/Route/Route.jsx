import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import Destination from "../pages/Destination";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Italy from "../pages/Italy";
import SignIn from "../pages/SignIn";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign" element={<SignIn />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Italy" element={<Italy />} />
      </Routes>
    </div>
  );
};

export default Router;
