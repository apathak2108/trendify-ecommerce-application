import {
  IS_ANIMATION_TRIGGERED,
  ERROR_MESSAGE,
  NUMBER_OF_CART_ITEMS,
} from "./actionTypes";

export const setIsAnimationTriggered = () => {
  return {
    type: IS_ANIMATION_TRIGGERED,
  };
};

export const setErrorMessage = (message) => {
  return {
    type: ERROR_MESSAGE,
    payload: message,
  };
};

export const setNumberOfItems = (itemID) => {
  return {
    type: NUMBER_OF_CART_ITEMS,
    payload: itemID,
  };
};
