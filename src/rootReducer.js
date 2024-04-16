import { combineReducers } from "redux";
import { cartItemsReducer } from "./redux/reducer/cartItemsReducer";
import { selectedSizeReducer } from "./redux/reducer/cartItemsReducer";

export const rootReducer = combineReducers({
  cart: cartItemsReducer,
  size: selectedSizeReducer,
});
