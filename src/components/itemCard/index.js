import React from "react";
import "./ItemCard.css";

const ItemCard = ({
  itemID,
  imageURL,
  productName,
  productDescription,
  discountedPrice,
  originalPrice,
  discountedPercentage,
  className,
  onClick
}) => {
  return (
    <div itemID={itemID} className={`item-card ${className}`} onClick={onClick}>
      <img className="item-image" src={imageURL} alt={productName} />
      <div className="item-info">
        <div className="item-info-product-name">{productName}</div>
        <div className="item-info-product-info">{productDescription}</div>
        <div className="item-info-price">
          <span>
            <span className="item-info-price-discounted-price">
              Rs. {discountedPrice}
            </span>
            <span className="item-info-price-strike-price">
              Rs. {originalPrice}
            </span>
          </span>
          <span className="item-info-price-discounted-percentage">
            ({discountedPercentage}% OFF)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;