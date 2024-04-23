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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [level2dataOfHoveredIndex, setLevel2DataOfHoveredIndex] = useState([]);
  const [level3dataOfHoveredIndex, setLevel3DataOfHoveredIndex] = useState([]);

  console.log(level2dataOfHoveredIndex, "level3dataOfHoveredIndex");

  const handleNavbarMouseOver = (id) => {
    setHoveredIndex(id);
    const hoveredItem = level1Data?.find((item) => item.id === id);
    if (hoveredItem) {
      setLevel2DataOfHoveredIndex(hoveredItem.level_2);
      setLevel3DataOfHoveredIndex(
        hoveredItem.level_2.map((level2Item) => level2Item.level_3).flat()
      );
    } else {
      setLevel2DataOfHoveredIndex([]);
      setLevel3DataOfHoveredIndex([]);
    }
    dispatch(setNavbarHit());
  };
  const handleNavbarMouseOut = () => {
    dispatch(setNavbarHit());
    setHoveredIndex(null);
    setLevel2DataOfHoveredIndex([]);
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
        <div className="on-hover-navbar-div" onMouseOver={() => dispatch(setNavbarHit())}>
          <div className="category-main-card">
            {level2dataOfHoveredIndex.map((level2Item, level2Index) => (
              <div className="specific-category-card">
                <span
                  key={level2Index}
                  className="specific-category-card-heading"
                >
                  {level2Item.title}
                </span>
                {level3dataOfHoveredIndex.map((level3Item, level3Index) => (
                  <span
                    key={level3Index}
                    className="specific-category-card-text"
                  >
                    {level3Item.title}
                  </span>
                ))}
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
