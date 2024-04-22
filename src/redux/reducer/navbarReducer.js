import {
  FETCH_LEVEL_ONE_DATA,
  FETCH_LEVEL_TWO_DATA,
  IS_NAVBAR_HIT,
} from "../action/actionTypes";

const initialState = {
  isNavbarHit: false,
  level1Data: [],
  level2Data: [],
  level3Data: [],
};

export const setNavbarHitReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_NAVBAR_HIT:
      return {
        ...state,
        isNavbarHit: !state.isNavbarHit,
      };
    default:
      return state;
  }
};

export const fetchNavbarItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEVEL_ONE_DATA:
      return {
        ...state,
        level1Data: action.payload,
      };
    case FETCH_LEVEL_TWO_DATA:
      return {
        ...state,
        level2Data: action.payload,
      };
    default:
      return state;
  }
};
