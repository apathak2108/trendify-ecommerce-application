import styled from "styled-components";

export const MainDiv = styled.div`
  height: 88vh;
  width: 99vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const MainDivForEmptyCart = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 270px;
  width: 400px;
  display: flex;
  flex-flow: column;
  justifly-content: center;
  align-items: center;
`;

export const CardContainerDiv = styled.div`
  width: 95%;
  height: 95%;
  overflow: scroll;

  @media only screen and (min-width: 360px) and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  }
`;

export const CheckoutCardDiv = styled.div`
  position: relative;
  height: 35%;
  width: 65%;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  column-gap: 7px;
  margin-left: 5%;

  @media only screen and (min-width: 360px) and (max-width: 768px) {
    width: fit-content;
`;

export const ImageDiv = styled.div`
  height: 95%;
  width: 20%;
  margin-left: 4px;
  border-radius: 3px;
`;

export const ItemDescriptionDiv = styled.div`
  height: 95%;
  width: 77%;
  display: flex;
  flex-flow: column;
`;

export const CheckoutCardButtonsDiv = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SizeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 35px;
  border: 1px solid darkgray;
  font-size: 14px;
  font-weight: 500;
  color: #282c3f;
  width: 50px;
  height: 50px;

  &:hover {
    border-color: #ff3f6c;
    color: #ff3f6c;
  }
`;

export const PopupWindowDiv = styled.div`
  display: flex;
  height: 170px;
  width: 300px;
  flex-wrap: wrap;
  flex-flow: column;
`;

export const ShowQuantitySelectorDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
`;

export const DeleteItemPopupDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  height: 80px;
  width: 270px;
  border: 1px solid #ccc;
`;
