import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="main-container">
      <img
        src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"
        alt="Page Not Found"
      ></img>
      <h3>We couldn't find any matches!</h3>
      <p>Please check the spelling or try searching something else</p>
    </div>
  );
};

export default NotFound;
