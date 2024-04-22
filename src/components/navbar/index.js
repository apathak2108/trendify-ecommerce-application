import React, { useEffect } from "react";
import "./Navbar.css";
import {
  setNavbarHit,
  fetchNavbarItems,
} from "../../redux/action/navbarAction";
import { useSelector, useDispatch } from "react-redux";
import NavBarItemCategoryCard from "../navbarItemCategoryCard.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const isNavbarHit = useSelector((state) => state?.navbarHit?.isNavbarHit);
  const navbarItems = useSelector((state) => state?.navbarItems?.level1Data);
  console.log(navbarItems)

  const handleNavbarMouseOver = () => {
    dispatch(setNavbarHit());
  };
  const handleNavbarMouseOut = () => {
    dispatch(setNavbarHit());
  };

  useEffect(() => {
    dispatch(fetchNavbarItems());
  }, []);
  return (
    <>
      <div className="navbar-main-container">
        {navbarItems.map((title, index) => (
          <span
            key={index}
            className="navbar-item"
            onMouseOver={handleNavbarMouseOver}
            onMouseOut={handleNavbarMouseOut}
          >
            {title}
          </span>
        ))}
      </div>
      {isNavbarHit && (
        <div className="on-hover-navbar-div">
          <NavBarItemCategoryCard />
        </div>
      )}
    </>
  );
};

export default Navbar;
