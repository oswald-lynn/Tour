import data from "../apis/data";
import { FETCH_TESTDATA } from "./types";

export const testdata = () => async (dispatch) => {
  const response = await data.get("/data");
  dispatch({ type: FETCH_TESTDATA, payload: response.data });
};
