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
  numberOfCartItemsReducer,
} from "./redux/reducer/itemDetailsReducer";
import {
  setNavbarHitReducer,
  navbarReducer,
} from "./redux/reducer/navbarReducer";

export const rootReducer = combineReducers({
  cart: cartItemsReducer,
  size: selectedSizeReducer,
  deleteItemPopup: deleteCartItemPopupReducer,
  selectedQuantity: selectedQuantityOfItemReducer,
  quantitySelectorPopup: quantitySelectorPopupReducer,
  animation: isAnimationTriggeredReducer,
  errMsg: errorMessageReducer,
  cartItems: numberOfCartItemsReducer,
  navbarHit: setNavbarHitReducer,
  navbarData: navbarReducer,
});
