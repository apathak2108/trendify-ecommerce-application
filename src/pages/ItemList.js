import React from 'react';
import { ItemCard } from '../components/ItemCard';

export const ItemList = () => {
    const items = [0,1,2,3,4,5];
  return (
    <>
        {items.map((index, key) => (
            <ItemCard imageURL= "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23158876/2023/10/4/ba6838bf-93c1-47d0-8948-790b3727f5711696415342531-anayna--Anarkali-Pure-Cotton-Kurta-With-Trousers--Dupatta-45-12.jpg"
            productName= "KALANI"
            productDescription= "Kurta with Trousers & Duppatta"
            discountedPrice="1690"
            originalPrice="4890"
            discountedPercentage="67"
            />
        ))}
    </>
  )
}
