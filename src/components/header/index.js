import React, { useEffect, useState } from "react";
import HeaderLogo from "../../images/trendify-logo.png";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../images/cart-icon.png";
import Button from "../button";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [dat, setDat] = useState();
  const mySet = useSelector(
    (state) => state?.cartItems?.numberOfCartItemsArray
  );

  useEffect(() => {
    setDat(mySet);
  }, [mySet]);
  const cartCount = JSON.stringify([...mySet].length);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    navigate("/auth/login");
  };
  const handleHeaderLogo = () => {
    navigate("/home");
  };

  return (
    <div className="header">
      <div className="header-left-portion">
        <img
          src={HeaderLogo}
          className="header-logo"
          alt="Logo"
          onClick={handleHeaderLogo}
        ></img>
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
  );
};

export default Header;
