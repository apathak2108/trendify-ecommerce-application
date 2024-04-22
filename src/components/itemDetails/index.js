import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import Header from "../header";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { items } from "../../pages/itemList/itemsData";
import { setSelectedSize } from "../../redux/action/cartAction";
import Navbar from "../navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsAnimationTriggered,
  setErrorMessage,
  setNumberOfItems,
} from "../../redux/action/itemDetailsAction";

const ItemDetails = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const selectedSize = useSelector((state) => state?.size?.selectedSize);
  const animationTriggered = useSelector(
    (state) => state?.animation?.animationTriggered
  );
  const errorMessage = useSelector((state) => state?.errMsg?.errorMessage);
  const dispatch = useDispatch();
  const { itemID } = useParams();
  const selectedItem = items[itemID - 1];
  const mySet = useSelector(
    (state) => state?.cartItems?.numberOfCartItemsArray
  );
  const handleSelectSize = (size) => {
    dispatch(setSelectedSize(size));
    dispatch(setErrorMessage(""));
  };
  const handleAddItemToCart = () => {
    if (selectedSize) {
      setCount(count + 1);
      dispatch(setErrorMessage(""));
      dispatch(setNumberOfItems(itemID));
    } else {
      dispatch(setErrorMessage("Please select a size"));
      dispatch(setIsAnimationTriggered());
    }
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="product-image-and-description-container">
        <div className="product-image-container">
          <img className="product-image" src={selectedItem.imageURL} />
        </div>
        <div className="product-description-container">
          <div className="product-details-container">
            <h1>{selectedItem.productName}</h1>
            <h2>{selectedItem.productDescription}</h2>
            <div className="product-price-container">
              <strong>₹ {selectedItem.discountedPrice}</strong>
              <span className="original-price">
                MRP <s>₹ {selectedItem.originalPrice}</s>
              </span>
              <span className="discounted-percentage">
                ({selectedItem.discountedPercentage}% OFF)
              </span>
            </div>
            <p className="tax-statement">inclusive of all taxes</p>
            <h4>SELECT SIZE</h4>
            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}
            <div
              className={`size-buttons-container ${
                animationTriggered ? "shake" : ""
              }`}
            >
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <Button
                  key={size}
                  className={`size-button ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  name={size}
                  onClick={() => handleSelectSize(size)}
                />
              ))}
            </div>

            <div className="cart-button" onClick={handleAddItemToCart}>
              ADD TO CART
            </div>
            <hr />

            <div className="best-offers-container">
              <h4>BEST OFFERS 🏷️</h4>
              <ul>
                <li>Best Price: Rs. 999</li>
                <li>
                  Coupon Discount: Rs. 300 off (check cart for final savings)
                </li>
                <li>
                  Applicable on: Orders above Rs. 1049 (only on first purchase)
                </li>
                <li>
                  Coupon code: <strong>TRENDIFY300</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-specs-container">
          <h4>PRODUCT DETAILS 📝</h4>
          <p>Maroon Kurta</p>
          <p>Duppatta</p>
          <p>Lehanga</p>
          <p>Regular Length</p>
          <p>Self Closure</p>
          <p>Knitted Pure Cotton</p>
          <h5>Size & Fit</h5>
          <p>Regular Fit</p>
          <p>Size worn by the model: M</p>
          <p>Height: 6'1"</p>
          <h5>Material & Core</h5>
          <p>Pure Cotton</p>
          <p>Machine Wash</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
