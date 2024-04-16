import { ADD_ITEM } from "./actionTypes";
import { SELECTED_SIZE } from "./actionTypes";

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const setSelectedSize = (size) => {
  return {
    type: SELECTED_SIZE,
    payload: size
  };
};
