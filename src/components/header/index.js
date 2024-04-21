import React, { useState } from "react";
import HeaderLogo from "../../images/trendify-logo.png";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../images/cart-icon.png";
import Button from "../button";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [hover, setHover] = useState(false);
  const mySet = useSelector(
    (state) => state?.cartItems?.numberOfCartItemsArray
  );

  const cartCount = JSON.stringify([...mySet].length);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    navigate("/auth/login");
  };
  const handleHeaderLogo = () => {
    navigate("/home");
  };
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    setHover(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-left-portion">
          <img
            src={HeaderLogo}
            className="header-logo"
            alt="Logo"
            onClick={handleHeaderLogo}
          ></img>
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Women Ethnic
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Women Western
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Men
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Kids
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Home & Kitchen
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Beauty & Health
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Jewellery
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Bags & Footwear
        </div>
        <div
          className="navbar-pages"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
          Electronics
        </div>
        <div className="header-right-portion">
          <img
            src={CartIcon}
            className="cart-icon"
            alt="Cart"
            onClick={() => navigate("/checkout")}
          />
          {mySet.length !== 0 && (
            <span
              className="cart-checkout-items-value"
              onClick={() => navigate("/checkout")}
            >
              {cartCount}
            </span>
          )}
          <Button
            name="Logout"
            onClick={handleLogout}
            className="logout-button"
          />
        </div>
      </div>
      {hover && (
        <div className="on-hover-div">
          <h1>Aur Baua</h1>
        </div>
      )}
    </>
  );
};

export default Header;
