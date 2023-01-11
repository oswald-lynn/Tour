//import _ from "lodash";
import {
  FETCH_DIVISION,
  FETCH_SINGLEDIVISION,
  FETCH_FAMOUSPLACE,
} from "../actions/types";

const initialState = {
  divisions: [],
  singleDivision: {},
  famousPlace: {},
};

export const divisionReducer = (state = initialState, action) => {
  console.log("Reducer >>", action.payload);
  switch (action.type) {
    case FETCH_DIVISION:
      //return { ...state, ..._.mapKeys(action.payload, "id") };
      return { ...state, divisions: [...action.payload] };
    case FETCH_SINGLEDIVISION:
      return { ...state, singleDivision: { ...action.payload } };
    case FETCH_FAMOUSPLACE:
      return { ...state, famousPlace: { ...action.payload } };
    default:
      return state;
  }
};

export default divisionReducer;
