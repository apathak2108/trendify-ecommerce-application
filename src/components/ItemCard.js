import React from "react";
import "./ItemCard.css";

export const ItemCard = ({
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
    <div className={`item-card ${className}`} onClick={onClick}>
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
