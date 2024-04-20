import {
  ADD_ITEM,
  SELECTED_SIZE,
  DELETE_CART_ITEM_POPUP,
  SELECTED_QUANTITY_OF_ITEM,
  SHOW_QUANTITY_SELECTOR_POPUP,
} from "./actionTypes";

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
