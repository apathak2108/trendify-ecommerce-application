import React from "react";
import "./Home.css";
import { Button } from "../components/Button";
import { ItemList } from "./ItemList";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    navigate('/auth/login');
  };

  return (
    <div className="main-container" >
      <Button name="Logout" onClick={handleLogout} className="logout-button"/>
      <div className="item-list-container">
        <ItemList />
      </div>
    </div>
  );
};