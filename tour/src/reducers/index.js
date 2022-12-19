import { combineReducers } from "redux";
import datasReducer from "./datasReducer";

export default combineReducers({
  datas: datasReducer,
});
