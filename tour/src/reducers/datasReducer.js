import _ from "lodash";
import { FETCH_DATAS, FETCH_DATA, FETCH_FAMOUSPLACE } from "../actions/types";

const initialState = {
  divisions: [],
  singleDivision: {},
  famousPlace: {},
};

export const datasReducer = (state = initialState, action) => {
  console.log("Reducer >>", action.payload);
  switch (action.type) {
    case FETCH_DATAS:
      //return { ...state, ..._.mapKeys(action.payload, "id") };
      return { ...state, divisions: [...action.payload] };
    case FETCH_DATA:
      return { ...state, singleDivision: { ...action.payload } };
    case FETCH_FAMOUSPLACE:
      return { ...state, famousPlace: { ...action.payload } };
    default:
      return state;
  }
};

export default datasReducer;
