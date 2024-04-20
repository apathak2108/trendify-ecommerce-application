import {
  IS_ANIMATION_TRIGGERED,
  ERROR_MESSAGE,
  NUMBER_OF_CART_ITEMS,
} from "../action/actionTypes";

const initialState = {
  animationTriggered: false,
  errorMessage: "",
  numberOfCartItemsArray: new Set(),
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
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const numberOfCartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_OF_CART_ITEMS:
      return {

        ...state,
        numberOfCartItemsArray: state.numberOfCartItemsArray.add(
          action.payload
        )

      };
    default:
        return state;
  }
};
