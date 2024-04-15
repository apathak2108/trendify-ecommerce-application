import React from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import Header from "../header";
import Button from "../button";

const ItemDetails = () => {
  const { itemID } = useParams();
  const getItemDetailsById = (id) => {
    return {
      itemID: id,
      productImage: "ma",
      productName: "Sample product",
      productDescription: "Sample Description",
      productDiscountedPrice: 25,
      productOriginalPrice: 55,
      productDiscountedPercentage: 5,
      productMatetialAndCare: ["", ""],
      productSpecifications: ["", "", "", "", ""],
    };
  };
  const itemDetails = getItemDetailsById(itemID);

  return (
    <>
      <Header />

      <div className="product-image-and-description-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23158876/2023/10/4/ba6838bf-93c1-47d0-8948-790b3727f5711696415342531-anayna--Anarkali-Pure-Cotton-Kurta-With-Trousers--Dupatta-45-12.jpg"
          ></img>
        </div>
        <div className="product-description-container">
          <div className="product-details-container">
            <h1>KALANI</h1>
            <h2>Kurta With Duppatta and Lehanga</h2>
            <div className="product-price-container">
              <strong>₹ 1690</strong>
              <span className="original-price">
                MRP <s>₹ 4890</s>
              </span>
              <span className="discounted-percentage">(67% OFF)</span>
            </div>
            <p className="tax-statement">inclusive of all taxes</p>
            <h4>SELECT SIZE</h4>
            <div className="size-buttons-container">
              <Button className="size-button" name="S" />
              <Button className="size-button" name="M" />
              <Button className="size-button" name="L" />
              <Button className="size-button" name="XL" />
              <Button className="size-button" name="XXL" />
            </div>
            <div className="cart-button">ADD TO CART</div>
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
// <h1>Item Details</h1>
//       <p>Item ID: {itemDetails.itemID}</p>
//       <p>Product Name: {itemDetails.productName}</p>
//       <p>Product Description: {itemDetails.productDescription}</p>
