import {
  IS_NAVBAR_HIT,
  FETCH_LEVEL_ONE_DATA,
  FETCH_LEVEL_TWO_DATA,
} from "./actionTypes";

export const setNavbarHit = () => {
  return {
    type: IS_NAVBAR_HIT,
  };
};

export const fetchNavbarItems = () => (dispatch) => {
  fetch("http://127.0.0.1:5500/helperAPI.json")
    .then((res) => res.json())
    .then((data) => {
      const levelOneItems = data?.payload?.level_1;
      const titles = levelOneItems.map((item) => item.title);
      dispatch({
        type: FETCH_LEVEL_ONE_DATA,
        payload: titles,
      });
    })
    .catch((err) => console.log("Error in fetching navbar items", err));
};

export const fetchLevelTwoData = () => (dispatch) => {
  fetch("http://127.0.0.1:5500/helperAPI.json")
    .then((res) => res.json())
    .then((data) => {
      const levelTwoItems = data?.payload?.level_1?.[0]?.level_2;
      const titles = levelTwoItems.map((item) => item.title);
      dispatch({
        type: FETCH_LEVEL_TWO_DATA,
        payload: titles,
      });
    })
    .catch((err) => console.log("Error in fetching", err));
};
