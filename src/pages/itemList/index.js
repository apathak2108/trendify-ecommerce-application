import React from "react";
import ItemCard from "../../components/itemCard";
import { useNavigate } from "react-router-dom";

export const ItemList = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemID) => {
    navigate(`/items/${itemID}`);
  };

  const items = [
    {
      itemID: "1",
      imageURL:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23158876/2023/10/4/ba6838bf-93c1-47d0-8948-790b3727f5711696415342531-anayna--Anarkali-Pure-Cotton-Kurta-With-Trousers--Dupatta-45-12.jpg",
      productName: "KALANI",
      productDescription: "Kurta With Duppatta",
      discountedPrice: "1690",
      originalPrice: "4890",
      discountedPercentage: "67",
    },
    {
      itemID: "2",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25970768/2023/11/21/864f2ee1-09a6-402d-8bae-14e64ef8c9161700573359400AAHWANWhiteFloralEmbroideredBohemianCottonTankCropTop1.jpg",
      productName: "AAHAWAN",
      productDescription: "Cotton Tank Crop Top",
      discountedPrice: "399",
      originalPrice: "1999",
      discountedPercentage: "80",
    },
    {
      itemID: "3",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27227006/2024/1/29/437714c2-08a2-4ed8-a41f-06deb6f01a691706534190577AthenaImmutableFloralPrintTie-UpNeckTwistedSatinTop1.jpg",
      productName: "ATHENA IMMUTABLE",
      productDescription: "Printed Shirt Style Top",
      discountedPrice: "873",
      originalPrice: "2299",
      discountedPercentage: "62",
    },
    {
      itemID: "4",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8889597/2019/4/8/8dc49bf7-181d-4d8d-80d7-e624ef85e3651554718288714-Roadster-Men-Navy-Blue--Grey-Regular-Fit-Checked-Casual-Shir-1.jpg",
      productName: "Roadster",
      productDescription: "Men Checked Casual Shirt",
      discountedPrice: "509",
      originalPrice: "1499",
      discountedPercentage: "66",
    },
    {
      itemID: "5",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25391094/2023/10/7/19bb3b7d-c621-4fb8-9656-7ba39b356da81696683528776PowerlookMenBlackTartanChecksOpaqueCheckedCasualShirt1.jpg",
      productName: "Powerlook",
      productDescription: "Oversized Casual Shirt",
      discountedPrice: "1187",
      originalPrice: "1799",
      discountedPercentage: "34",
    },
    {
      itemID: "6",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
      productName: "Roadster",
      productDescription: "Printed Casual Shirt",
      discountedPrice: "599",
      originalPrice: "1499",
      discountedPercentage: "60",
    },
    {
      itemID: "7",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19825448/2023/11/28/06783cdd-069a-4b33-ade4-9d00be59795f1701154775351-Storyhome-Blue--White-Striped-180-GSM-AC-Room-Reversible-Sin-1.jpg",
      productName: "Story@home",
      productDescription: "Single Bed Comforter",
      discountedPrice: "1264",
      originalPrice: "2299",
      discountedPercentage: "45",
    },
    {
      itemID: "8",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17414570/2023/9/12/062a9372-1856-47bd-9c2d-7af6d30bcda31694516017668-TNW-the-natural-wash-Pull-Me-Closer-Body-Mist-100-ml-9031694-1.jpg",
      productName: "TNW the natural wash",
      productDescription: "Pull Me Closer Body Mist",
      discountedPrice: "292",
      originalPrice: "450",
      discountedPercentage: "35",
    },
    {
      itemID: "9",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28415784/2024/3/20/6bcb6044-89dc-4c2b-a2bd-ae91fc31aa6d1710951333884KitchenStorage1.jpg",
      productName: "STEEPLE",
      productDescription: "2 Pieces Oil Dispenser 1L",
      discountedPrice: "898",
      originalPrice: "1798",
      discountedPercentage: "50",
    },
    {
      itemID: "10",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28255524/2024/3/14/42e175b5-a05e-4d2a-93d9-fd9192e7ec1a1710402605999FloorLamps1.jpg",
      productName: "Crosscut",
      productDescription: "Metal Floor Lamp",
      discountedPrice: "1746",
      originalPrice: "4990",
      discountedPercentage: "65",
    },
    {
      itemID: "11",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26162578/2023/12/5/0d77c7bf-3406-4d4a-9492-0a130abfd9a51701799420307BTRCRAFTSOrange-colorTexturedCylindericalFloorLampWithWooden1.jpg",
      productName: "BTR CRAFTS",
      productDescription: "Wooden Floor Lamp",
      discountedPrice: "1889",
      originalPrice: "4999",
      discountedPercentage: "165",
    },
    {
      itemID: "12",
      imageURL:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26660278/2023/12/25/d485572c-7ad6-4f4d-a887-93265a1e96bb1703518204459ShopgalleryBlueGeometricAnti-SkidPolyesterCarpet1.jpg",
      productName: "Shopgallery",
      productDescription: "Geometric Carpet",
      discountedPrice: "2999",
      originalPrice: "6999",
      discountedPercentage: "133",
    },
  ];
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
