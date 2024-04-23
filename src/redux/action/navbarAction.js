import {
  IS_NAVBAR_HIT,
  INITIALIZE_LEVEL1_DATA,
} from "./actionTypes";

export const setNavbarHit = () => {
  return {
    type: IS_NAVBAR_HIT,
  };
};

export const initializeLevel1Data = (data) => ({
  type: INITIALIZE_LEVEL1_DATA,
  payload: data,
});

export const fetchAndInitializeData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:5500/helperAPI.json');
      const data = await response.json();
      dispatch(initializeLevel1Data(data.payload.level_1));
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error if needed
    }
  };
};