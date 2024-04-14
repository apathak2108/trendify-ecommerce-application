import React from "react";
import "./Home.css";
import { ItemList } from "./ItemList";
import { Header } from "../components/Header";

export const Home = () => {
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
