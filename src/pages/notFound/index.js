import React from "react";
import "./NotFound.css";
import Button from "../../components/button";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  const handle404Button = () => {
    navigate("/home");
  }
  return (
    <div className="main-container">
      <img
        src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"
        alt="Page Not Found"
      ></img>
      <h3>We couldn't find any matches!</h3>
      <p>Please check the spelling or try searching something else</p>
      <Button name="Go To Home Page" className="homepage-redirecting-button" onClick={handle404Button} />
    </div>
  );
};

export default NotFound;
