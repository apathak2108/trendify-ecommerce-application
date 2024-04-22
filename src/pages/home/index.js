import React, { useState } from "react";
import "./Home.css";
import { ItemList } from "../itemList";
import Header from "../../components/header";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home-main-container">
        <div className="item-list-container">
          <ItemList />
        </div>
      </div>
    </>
  );
};

export default Home;
