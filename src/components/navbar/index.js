import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  setNavbarHit,
  fetchAndInitializeData,
} from "../../redux/action/navbarAction";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isNavbarHit = useSelector((state) => state?.navbarHit?.isNavbarHit);
  const level1Data = useSelector((state) => state?.navbarData?.level1Data);

  const [level2dataOfHoveredIndex, setLevel2DataOfHoveredIndex] = useState([]);

  const handleNavbarMouseOver = (id) => {
    const hoveredItem = level1Data?.find((item) => item.id === id);
    if (hoveredItem) {
      setLevel2DataOfHoveredIndex(hoveredItem.level_2);
    } else {
      setLevel2DataOfHoveredIndex([]);
    }
    dispatch(setNavbarHit(true));
  };
  const handleNavbarMouseOut = () => {
    setLevel2DataOfHoveredIndex([]);
    dispatch(setNavbarHit(false));
  };

  useEffect(() => {
    dispatch(fetchAndInitializeData());
  }, [dispatch]);

  return (
    <>
      <div className="navbar-main-container">
        {level1Data.map((item, index) => (
          <span
            key={index}
            className="navbar-item"
            onMouseOver={() => handleNavbarMouseOver(item.id)}
            onMouseOut={handleNavbarMouseOut}
          >
            {item.title}
          </span>
        ))}
      </div>
      {isNavbarHit && (
        <div
          className="on-hover-navbar-div"
        >
          <div className="category-main-card">
            {level2dataOfHoveredIndex?.map((level2Item, level2Index) => (
              <div className="specific-category-card" key={level2Index}>
                <span className="specific-category-card-heading">
                  {level2Item.title}
                </span>
                {level2dataOfHoveredIndex[level2Index].level_3?.map(
                  (level3Item, level3Index) => (
                    <span
                      key={level3Index}
                      className="specific-category-card-text"
                    >
                      {level3Item.title}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

// {level3dataOfHoveredIndex[index]?.title}
