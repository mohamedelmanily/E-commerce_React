import React from "react";
import Nav from "../components/Nav";
import Announcment from "../components/Announcment";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcment />
      <Nav />
      <Slider />
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default Home;
