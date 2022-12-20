import _ from "lodash";
import { FETCH_DATA } from "../actions/types";

export const datasReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default datasReducer;
