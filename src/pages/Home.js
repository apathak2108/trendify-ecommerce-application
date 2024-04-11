import React from "react";
import './Home.css';
import { Button } from "../components/Button";
import { ItemList } from "./ItemList";

export const Home = () => {
  
  const handleLogout = ()=>{
  localStorage.removeItem("loginStatus");
  window.location.href= "/";
};


  return (
    <div className="main-container">  
       <div className="item-list-container">
         <ItemList />
         
       </div>
    </div>
  );
};
