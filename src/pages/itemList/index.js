import React from "react";
import ItemCard from "../../components/itemCard";
import { useNavigate } from "react-router-dom";
import { items } from "./itemsData";

export const ItemList = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemID) => {
    navigate(`/items/${itemID}`);
  };

  return (
    <>
      {items.map((item) => (
        <ItemCard
          key={item.itemID}
          itemID={item.itemID}
          imageURL={item.imageURL}
          productName={item.productName}
          productDescription={item.productDescription}
          discountedPrice={item.discountedPrice}
          originalPrice={item.originalPrice}
          discountedPercentage={item.discountedPercentage}
          onClick={() => handleItemClick(item.itemID)}
        />
      ))}
    </>
  );
};
