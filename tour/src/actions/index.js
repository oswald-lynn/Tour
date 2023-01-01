import data from "../apis/data";
import { FETCH_DATAS, FETCH_DATA, FETCH_FAMOUSPLACE } from "./types";
import _ from "lodash";

export const fetchdatas = () => async (dispatch, getState) => {
  const response = await data.get("/division");
  console.log("Actions >>", response.data);
  dispatch({ type: FETCH_DATAS, payload: response.data.result });
};

export const fetchdata = (_id) => async (dispatch) => {
  const response = await data.get(`/division/${_id}`);
  console.log("click >>", response);
  dispatch({ type: FETCH_DATA, payload: response.data.result });
};

export const fetchFamousPlace = (_id) => async (dispatch) => {
  const response = await data.get(`/famousplace/${_id}`);
  console.log("FamousPlace >>", response);
  dispatch({ type: FETCH_FAMOUSPLACE, payload: response.data.result });
};
