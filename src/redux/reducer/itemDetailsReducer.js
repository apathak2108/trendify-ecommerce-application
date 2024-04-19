import { IS_ANIMATION_TRIGGERED, ERROR_MESSAGE } from "../action/actionTypes";

const initialState = {
  animationTriggered: false,
  errorMsg: "",
};

export const isAnimationTriggeredReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ANIMATION_TRIGGERED:
      return {
        ...state,
        animationTriggered: !state.animationTriggered,
      };
    default:
      return state;
  }
};

export const errorMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
