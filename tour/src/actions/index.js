import data from "../apis/data";
import { FETCH_DATA } from "./types";

export const fetchdata = () => async (dispatch) => {
  const response = await data.get("/data");
  console.log(response);
  dispatch({ type: FETCH_DATA, payload: response.data });
};
