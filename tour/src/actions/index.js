import data from "../apis/data";
import { FETCH_DATAS, FETCH_DATA } from "./types";
import { FETCH_DETAIL } from "./types";

export const fetchdatas = () => async (dispatch) => {
  const response = await data.get("/data");
  //console.log(response);
  dispatch({ type: FETCH_DATAS, payload: response.data });
};

export const fetchdata = (id) => async (dispatch) => {
  const response = await data.get(`/data/${id}`);
  //console.log("click", response);
  dispatch({ type: FETCH_DATA, payload: response.data });
};

export const fetchdetail = (id) => async (dispatch) => {
  const response = await data.get(`/data/${id}`);
  console.log("FamousPlaceDetail Action Page>>", response);
  dispatch({ type: FETCH_DETAIL, payload: response.data });
};
