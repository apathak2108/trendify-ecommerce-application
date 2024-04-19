import {
  ADD_ITEM,
  SELECTED_QUANTITY_OF_ITEM,
  SELECTED_SIZE,
  DELETE_CART_ITEM_POPUP,
  SHOW_QUANTITY_SELECTOR_POPUP,
} from "../action/actionTypes";

const initialState = {
  cartCount: 0,
  selectedSize: null,
  isDeleteCartItemPopup: false,
  selectedQuantity: 1,
  isQuantitySelectorPopup: false,
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

export const deleteCartItemPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CART_ITEM_POPUP:
      return {
        ...state,
        isDeleteCartItemPopup: !state.isDeleteCartItemPopup,
      };
    default:
      return state;
  }
};

export const selectedQuantityOfItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_QUANTITY_OF_ITEM:
      return {
        ...state,
        selectedQuantity: action.payload,
      };
    default:
      return state;
  }
};

export const quantitySelectorPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUANTITY_SELECTOR_POPUP:
      return {
        ...state,
        isQuantitySelectorPopup: !state.isQuantitySelectorPopup,
      };
    default:
      return state;
  }
};
