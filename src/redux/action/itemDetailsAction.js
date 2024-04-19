import { IS_ANIMATION_TRIGGERED, ERROR_MESSAGE } from "./actionTypes";

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
