import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import Header from "../header";
import Button from "../button";
import { items } from "../../pages/itemList/itemsData";
import { addItem, setSelectedSize } from "../../redux/action/cartAction";
import { useSelector, useDispatch } from "react-redux";

const ItemDetails = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const selectedSize = useSelector((state) => state.size);
  const dispatch = useDispatch();
  const { itemID } = useParams();
  const selectedItem = items[itemID - 1];
  const [errorMessage, setErrorMessage] = useState("");
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleSelectSize = (size) => {
    dispatch(setSelectedSize(size));
    setErrorMessage("");
  };
  const handleAddItemToCart = () => {
    if (selectedSize.selectedSize) {
      dispatch(addItem());
      setErrorMessage("");
      setAnimationTriggered(false);
    } else {
      setErrorMessage("Please select a size");
      setAnimationTriggered(true);
    }
  };
  return (
    <>
      <Header />
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
                    selectedSize.selectedSize === size ? "selected" : ""
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
