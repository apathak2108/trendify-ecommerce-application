import { combineReducers } from "redux";
import {
  cartItemsReducer,
  selectedSizeReducer,
  deleteCartItemPopupReducer,
  selectedQuantityOfItemReducer,
  quantitySelectorPopupReducer,
} from "./redux/reducer/cartItemsReducer";
import {
  isAnimationTriggeredReducer,
  errorMessageReducer,
} from "./redux/reducer/itemDetailsReducer";

export const rootReducer = combineReducers({
  cart: cartItemsReducer,
  size: selectedSizeReducer,
  deleteItemPopup: deleteCartItemPopupReducer,
  selectedQuantity: selectedQuantityOfItemReducer,
  quantitySelectorPopup: quantitySelectorPopupReducer,
  animation: isAnimationTriggeredReducer,
  errMsg: errorMessageReducer,
});
