import data from "../apis/data";
import {
  FETCH_DIVISION,
  FETCH_SINGLEDIVISION,
  FETCH_FAMOUSPLACE,
} from "./types";

export const fetchDivision = () => async (dispatch) => {
  const response = await data.get("/division");
  //console.log("Actions >>", response.data);
  dispatch({ type: FETCH_DIVISION, payload: response.data.result });
};

export const fetchSingleDivision = (_id) => async (dispatch) => {
  const response = await data.get(`/division/${_id}`);
  console.log("click >>", response);
  dispatch({ type: FETCH_SINGLEDIVISION, payload: response.data.result });
};

export const fetchFamousPlace = (_id) => async (dispatch) => {
  const response = await data.get(`/famousplace/${_id}`);
  //console.log("FamousPlace >>", response);
  dispatch({ type: FETCH_FAMOUSPLACE, payload: response.data.result });
};
