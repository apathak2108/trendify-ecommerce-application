import React, { useState } from "react";
import "./Home.css";
import { ItemList } from "../itemList";
import Header from "../../components/header";
import Loader from "../../components/loader";

const Home = ({ cartCount }) => {
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !loading) {
      setLoading(true);
      setTimeout(() => {
        setShowMore(true);
        setLoading(false);
      }, 2000);
    }
  };

  
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header cartCount={cartCount} />
      <div className="home-main-container">
        <div className="item-list-container">
          <ItemList />
          {showMore && <ItemList />} 
          {loading && <Loader />} 
        </div>
      </div>
    </>
  );
};

export default Home;
