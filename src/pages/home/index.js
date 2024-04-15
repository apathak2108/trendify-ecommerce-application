import React from "react";
import "./Home.css";
import { ItemList } from "../itemList";
import Header from "../../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-main-container">
        <div className="item-list-container">
          <ItemList />
        </div>
      </div>
    </>
  );
};

export default Home;