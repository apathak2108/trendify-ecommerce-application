import { ADD_ITEM } from "../action/actionTypes";
import { SELECTED_SIZE } from "../action/actionTypes";

const initialState = {
  cartCount: 0,
  selectedSize: null,
};

export const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    default:
      return state;
  }
};

export const selectedSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    default:
      return state;
  }
};