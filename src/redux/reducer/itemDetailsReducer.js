import {
  IS_ANIMATION_TRIGGERED,
  ERROR_MESSAGE,
  NUMBER_OF_CART_ITEMS,
  DELETE_CART_ITEM,
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
        ),
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        numberOfCartItemsReducer: state.numberOfCartItemsArray.splice(
          action.payload,
          1
        ),
      };
    default:
      return state;
  }
};
