import React from "react";
import HeaderLogo from "../../images/trendify-logo.png";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../images/cart-icon.png";
import Button from "../button";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
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
        <img src={CartIcon} className="cart-icon" alt="Cart" onClick={() => navigate('/checkout')} />
        {cartCount !== 0 && (
          <span className="cart-checkout-items-value">{cartCount}</span>
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
