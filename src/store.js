import { applyMiddleware, createStore } from "redux";
import { cartItemsReducer } from "./redux/reducer/cartItemsReducer";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
