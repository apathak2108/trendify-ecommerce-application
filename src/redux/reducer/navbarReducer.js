import { IS_NAVBAR_HIT, INITIALIZE_LEVEL1_DATA } from "../action/actionTypes";

const initialState = {
  isNavbarHit: false,
  level1Data: [],
};

export const setNavbarHitReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_NAVBAR_HIT:
      return {
        ...state,
        isNavbarHit: action.payload,
      };
    default:
      return state;
  }
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_LEVEL1_DATA:
      return {
        ...state,
        level1Data: action.payload,
      };
    default:
      return state;
  }
};
