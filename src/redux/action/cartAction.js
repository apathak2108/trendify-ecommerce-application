import { ADD_ITEM } from "./actionTypes";
import { SELECTED_SIZE } from "./actionTypes";
import { DELETE_CART_ITEM_POPUP } from "./actionTypes";
import { SELECTED_QUANTITY_OF_ITEM } from "./actionTypes";
import { SHOW_QUANTITY_SELECTOR_POPUP } from "./actionTypes";

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const setSelectedSize = (size) => {
  return {
    type: SELECTED_SIZE,
    payload: size,
  };
};

export const handleDeleteCartItemPopup = () => {
  return {
    type: DELETE_CART_ITEM_POPUP,
  };
};

export const setSelectedQuantityOfItem = (quantity) => {
  return {
    type: SELECTED_QUANTITY_OF_ITEM,
    payload: quantity,
  };
};

export const showQuantitySelectorPopup = () => {
  return {
    type: SHOW_QUANTITY_SELECTOR_POPUP,
  };
};
