import React from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import { Header } from "./Header";
import { Button } from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ItemDetails = () => {
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
            src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25970768/2023/11/21/864f2ee1-09a6-402d-8bae-14e64ef8c9161700573359400AAHWANWhiteFloralEmbroideredBohemianCottonTankCropTop1.jpg"
          ></img>
        </div>
        <div className="product-description-container">
          <div className="product-details-container">
            <h1>KALANI</h1>
            <h2>Kurta With Duppatta and Lehanga</h2>
            <div className="product-price-container">
              <strong>₹ 1690</strong>
              <span className="original-price">MRP <s>₹ 4890</s></span>
              <span className="discounted-percentage">(67% OFF)</span>
            </div>
            <p className="tax-statement">inclusive of all taxes</p>
            <h4>SELECT SIZE</h4>
            <div className="size-buttons-container">
              <Button className="size-button" name="S"/>
              <Button className="size-button" name="M"/>
              <Button className="size-button" name="L"/>
              <Button className="size-button" name="XL"/>
              <Button className="size-button" name="XXL"/>
            </div>
            <div className="cart-button">
            <FontAwesomeIcon icon="fa-thin fa-cart-arrow-down" style={{color: "#g6e3n"}} />
            <p>ADD TO CART</p>
            </div>
          </div>
          <div className="product-specs-container"></div>
        </div>
      </div>
    </>
  );
};

// <h1>Item Details</h1>
//       <p>Item ID: {itemDetails.itemID}</p>
//       <p>Product Name: {itemDetails.productName}</p>
//       <p>Product Description: {itemDetails.productDescription}</p>
