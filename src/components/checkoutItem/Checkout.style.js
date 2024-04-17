import styled from "styled-components";

export const MainDiv = styled.div`
  height: 88vh;
  width: 99vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CardContainerDiv = styled.div`
  width: 95%;
  height: 95%;
  overflow: scroll;
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
  justify-content: flex-start;
  align-items: center;
  column-gap: 7px;
  margin-left: 5%;
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
`;

export const PopupWindowDiv = styled.div`
  display: flex;
  height: 170px;
  width: 300px;
  flex-wrap: wrap;
  flex-flow: column;
`;