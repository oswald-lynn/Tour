import data from "../apis/data";
import { FETCH_DATAS, FETCH_DATA } from "./types";
import _ from "lodash";

export const fetchdatasAndfmousplace = () => async (dispatch, getState) => {
  await dispatch(fetchdatas());
  _.chain(getState().division)
    .map("division")
    .uniq()
    .forEach((_id) => dispatch(fetchdata(`/division/${_id}`)))
    .value();
};

export const fetchdatas = () => async (dispatch, getState) => {
  const response = await data.get("/division");
  console.log("Actions >>", response);
  dispatch({ type: FETCH_DATAS, payload: response.data });
};

export const fetchdata = (_id) => async (dispatch) => {
  const response = await data.get(`/division/${_id}`);
  console.log("click", response);
  dispatch({ type: FETCH_DATA, payload: response.data });
};
