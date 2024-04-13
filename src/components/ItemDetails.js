import React from "react";
import { useParams } from "react-router-dom";

export const ItemDetails = () => {
  const { itemID } = useParams();
  const getItemDetailsById = (id) => {
    return {
      itemID: id,
      productName: "Sample product",
      productDescription: "Sample Description"
    };
  };
  const itemDetails = getItemDetailsById(itemID);

  return (
    <div>
      <h1>Item Details</h1>
      <p>Item ID: {itemDetails.itemID}</p>
      <p>Product Name: {itemDetails.productName}</p>
      <p>Product Description: {itemDetails.productDescription}</p>
    </div>
  );
};