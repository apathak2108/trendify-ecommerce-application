import React from "react";
import HeaderLogo from "../../images/trendify-logo.png"
import { useNavigate } from "react-router-dom";
import Button from "../button";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    navigate("/auth/login");
  };
  return (
    <div className="header">
      <img src={HeaderLogo} className="header-logo"></img>
      <Button name="Logout" onClick={handleLogout} className="logout-button" />
    </div>
  );
};

export default Header;