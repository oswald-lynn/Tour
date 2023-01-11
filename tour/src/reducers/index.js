import { combineReducers } from "redux";
import divisionReducer from "./divisionReducer";

export default combineReducers({
  dataDivisions: divisionReducer,
});
