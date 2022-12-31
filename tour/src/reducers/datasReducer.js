import _ from "lodash";
import { FETCH_DATAS, FETCH_DATA } from "../actions/types";

export const datasReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATAS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_DATA:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default datasReducer;
