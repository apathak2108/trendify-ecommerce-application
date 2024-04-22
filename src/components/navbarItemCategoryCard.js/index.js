import React, { useEffect } from "react";
import "./NavBarItemCategoryCard.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchLevelTwoData } from "../../redux/action/navbarAction";

const NavBarItemCategoryCard = () => {
  const dispatch = useDispatch();
  const level2Items = useSelector((state) => state?.navbarItems?.level2Data);
  console.log(level2Items, "level2Items")

  useEffect(() => {
    dispatch(fetchLevelTwoData())
  }, []);
  return (
    <>
      <div className="category-main-card">
      {level2Items.map((title, index) => (
        <div className="specific-category-card">
            <span key={index} className="specific-category-card-heading">{title}</span>
          <span className="specific-category-card-text">View All</span>
          
        </div>
        ))}
      </div>
    </>
  );
};

export default NavBarItemCategoryCard;