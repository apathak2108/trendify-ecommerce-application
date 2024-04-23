import React from "react";
import {
  MainDiv,
  CardContainerDiv,
  CheckoutCardDiv,
  ImageDiv,
  ItemDescriptionDiv,
  CheckoutCardButtonsDiv,
  SizeButton,
  PopupWindowDiv,
  ShowQuantitySelectorDiv,
  MainDivForEmptyCart,
  DeleteItemPopupDiv,
} from "./Checkout.style";
import {
  handleDeleteCartItemPopup,
  setSelectedQuantityOfItem,
  showQuantitySelectorPopup,
} from "../../redux/action/cartAction";
import "./Checkout.css";
import Header from "../header";
import Button from "../button";
import CloseIcon from "../../images/close.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyCartImage from "../../images/emptyCartImg.png";
import Navbar from "../navbar";

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
          >
            {quantity}
          </SizeButton>
        ))}
      </div>
    </PopupWindowDiv>
  );
};

const CheckoutItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mySet = useSelector(
    (state) => state?.cartItems?.numberOfCartItemsArray
  );
  const mySetArray = [...mySet];
  const mySetArrayStateFun = () => {
    if (mySetArray.length > 0) {
      return true;
    }
    return false;
  };
  let mySetArrayState = mySetArrayStateFun();

  const openDeleteItemPopup = useSelector(
    (state) => state?.deleteItemPopup?.isDeleteCartItemPopup
  );
  const selectedQuantity = useSelector(
    (state) => state?.selectedQuantity?.selectedQuantity
  );
  const selectedSize = useSelector((state) => state?.size?.selectedSize);
  const showQuantitySelector = useSelector(
    (state) => state?.quantitySelectorPopup?.isQuantitySelectorPopup
  );
  const toggleQuantitySelector = () => {
    dispatch(showQuantitySelectorPopup());
  };

  const handleSelectQuantity = (quantity) => {
    dispatch(setSelectedQuantityOfItem(quantity));
    toggleQuantitySelector();
  };

  return (
    <>
      <Header />
      <Navbar />
      <MainDiv>
        <CardContainerDiv>
          {mySetArray.map((index) => (
            <CheckoutCardDiv key={index}>
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
                  <span style={{ marginLeft: "10px" }}>
                    Size: {selectedSize}
                  </span>
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
                onClick={() => dispatch(handleDeleteCartItemPopup())}
              />
            </CheckoutCardDiv>
          ))}
        </CardContainerDiv>
        {showQuantitySelector && (
          <ShowQuantitySelectorDiv>
            <QuantitySelector onSelectQuantity={handleSelectQuantity} />
          </ShowQuantitySelectorDiv>
        )}
        {openDeleteItemPopup && (
          <DeleteItemPopupDiv>
            <span className="remove-item-confirmation-text">
              Are you sure you want to remove this item from cart ?
            </span>
            <hr />
            <div className="remove-item-buttons-div">
              <Button
                name="Yes, Remove it"
                className="remove-yes-btn"
                onClick={() => dispatch(handleDeleteCartItemPopup())}
              />
              <span className="vertial-line-bw-btn">|</span>
              <Button
                name="No, Back to Cart"
                className="remove-no-btn"
                onClick={() => dispatch(handleDeleteCartItemPopup())}
              />
            </div>
          </DeleteItemPopupDiv>
        )}
        {!mySetArrayState && (
          <MainDivForEmptyCart>
            <img src={EmptyCartImage} style={{ height: "100%" }}></img>
            <h3 style={{ marginTop: "0", marginBottom: "5px" }}>Hey, it feels so light!</h3>
            <span style={{ fontSize: "14px" }}>
              There is nothing in your cart
            </span>
            <Button
              name="Go to Shopping"
              className="go-to-shop-btn"
              onClick={() => navigate("/home")}
            />
          </MainDivForEmptyCart>
        )}
      </MainDiv>
    </>
  );
};

export default CheckoutItem;
