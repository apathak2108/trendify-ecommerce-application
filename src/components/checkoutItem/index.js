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
import { items } from "../../pages/itemList/itemsData";

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
  const [indexToDelete, setIndexToDelete] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mySet = useSelector(
    (state) => state?.cartItems?.numberOfCartItemsArray
  );
  const selectedItems = [...mySet];
  const mySetArrayStateFun = () => {
    if (selectedItems.length > 0) {
      return true;
    }
    return false;
  };
  console.log(selectedItems, "selectedItems")

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

  const handleSelectQuantity = (ItemId, quantity) => {
    dispatch(setSelectedQuantityOfItem(ItemId, quantity));
    toggleQuantitySelector();
  };
  const handleDeleteCartItem = (index) => {
    dispatch(handleDeleteCartItemPopup());
    setIndexToDelete(index);
  };

  const deleteSelectedCartItem = () => {
    // const updatedItems
    selectedItems.splice(indexToDelete, 1)
    dispatch(handleDeleteCartItemPopup());
  } 

  console.log(indexToDelete, "indexToDelete");
  return (
    <>
      <Header />
      <Navbar />
      <MainDiv>
        <CardContainerDiv>
          {selectedItems.map((itemId, index) => {
            const selectedItem = items.find((item) => item.itemID === itemId);
            return (
              <CheckoutCardDiv key={index}>
                <ImageDiv>
                  <img
                    src={selectedItem.imageURL}
                    style={{ height: "100%", width: "100%" }}
                  />
                </ImageDiv>
                <ItemDescriptionDiv>
                  <h3 style={{ marginTop: "5px", marginBottom: "8px" }}>
                    {selectedItem.productName}
                  </h3>
                  <span>{selectedItem.productDescription}</span>
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
                      ₹ {selectedItem.discountedPrice}
                    </strong>
                    <span
                      className="original-price"
                      style={{ fontSize: "17px" }}
                    >
                      MRP <s>₹ {selectedItem.originalPrice}</s>
                    </span>
                    <span
                      className="discounted-percentage"
                      style={{ fontSize: "17px" }}
                    >
                      ({selectedItem.discountedPercentage}% OFF)
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
                  // onClick={() => )}
                  onClick={() => handleDeleteCartItem(index)}
                />
              </CheckoutCardDiv>
            );
          })}
        </CardContainerDiv>
        {showQuantitySelector && (
          <ShowQuantitySelectorDiv>
            <QuantitySelector onSelectQuantity={() => handleSelectQuantity()} />
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
                onClick={deleteSelectedCartItem}
                // onClick={handleDeleteCartItem}
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
            <h3 style={{ marginTop: "0", marginBottom: "5px" }}>
              Hey, it feels so light!
            </h3>
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
