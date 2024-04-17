import React, { useState } from "react";
import {
  MainDiv,
  CardContainerDiv,
  CheckoutCardDiv,
  ImageDiv,
  ItemDescriptionDiv,
  CheckoutCardButtonsDiv,
  SizeButton,
  PopupWindowDiv,
} from "./Checkout.style";
import "./Checkout.css";
import Header from "../header";
import Button from "../button";
import CloseIcon from "../../images/close.png";

const QuantitySelector = ({ onSelectQuantity }) => {
  const selectQuantity = (quantity) => {
    onSelectQuantity(quantity);
  };

  return (
    <PopupWindowDiv>
      <div style={{ marginTop: "5px" }}>Select Quantity</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
          <SizeButton
            key={quantity}
            name={`Qty: ${quantity}`}
            onClick={() => selectQuantity(quantity)}
          />
        ))}
      </div>
    </PopupWindowDiv>
  );
};

const CheckoutItem = () => {
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isClosePopup, setIsClosePopup] = useState(false);

  const toggleQuantitySelector = () => {
    setShowQuantitySelector(!showQuantitySelector);
  };

  const handleSelectQuantity = (quantity) => {
    setSelectedQuantity(quantity);
    toggleQuantitySelector();
  };

  const handleRemoveItemPopup = () => {
    setIsClosePopup(true);
  };

  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      <MainDiv>
        <CardContainerDiv>
          {arr.map((item, index) => (
            <CheckoutCardDiv>
              <ImageDiv>
                <img
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23158876/2023/10/4/ba6838bf-93c1-47d0-8948-790b3727f5711696415342531-anayna--Anarkali-Pure-Cotton-Kurta-With-Trousers--Dupatta-45-12.jpg"
                  style={{ height: "100%", width: "100%" }}
                />
              </ImageDiv>
              <ItemDescriptionDiv>
                <h3 style={{ marginTop: "5px", marginBottom: "8px" }}>
                  KALANI
                </h3>
                <span>Kurta With Duppatta and Lehanga</span>
                <span
                  style={{
                    marginTop: "5px",
                    fontSize: "12px",
                    color: "#94969f",
                  }}
                >
                  Sold by Truenet Commerce
                </span>
                <CheckoutCardButtonsDiv>
                  <Button
                    name={`Qty: ${selectedQuantity} ▼`}
                    onClick={toggleQuantitySelector}
                  />
                  <span style={{ marginLeft: "10px" }}>Size: M</span>
                </CheckoutCardButtonsDiv>
                <div
                  className="product-price-container"
                  style={{ marginBottom: "8px" }}
                >
                  <strong style={{ fontSize: "19px", marginLeft: "0" }}>
                    ₹ 2500
                  </strong>
                  <span className="original-price" style={{ fontSize: "17px" }}>
                    MRP <s>₹ 5000</s>
                  </span>
                  <span
                    className="discounted-percentage"
                    style={{ fontSize: "17px" }}
                  >
                    (50% OFF)
                  </span>
                </div>
                <span style={{ fontSize: "14px" }}>
                  ↩ 14 Days Return Guarantee
                </span>
              </ItemDescriptionDiv>
              <img
                src={CloseIcon}
                style={{
                  height: "15px",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={handleRemoveItemPopup}
              />
            </CheckoutCardDiv>
          ))}
        </CardContainerDiv>
        {showQuantitySelector && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #ccc",
            }}
          >
            <QuantitySelector onSelectQuantity={handleSelectQuantity} />
          </div>
        )}
        {isClosePopup && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              height: "10%",
              width: "20%",
              border: "1px solid #ccc",

            }}
          >
            <span className="remove-item-confirmation-text">Are you sure you want to remove this item from cart ?</span>
            <hr />
            <div className="remove-item-buttons-div">
              <Button
                name="Yes, Remove it"
                className="remove-yes-btn"
                onClick={() => setIsClosePopup(false)}
              />
              <span className="vertial-line-bw-btn">|</span>
              <Button
                name="No, Back to Cart"
                className="remove-no-btn"
                onClick={() => setIsClosePopup(false)}
              />
            </div>
          </div>
        )}
      </MainDiv>
    </>
  );
};

export default CheckoutItem;
