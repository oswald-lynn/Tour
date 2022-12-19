import axios from "axios";
import Constants from "../common/Constants";

export default axios.create({
  baseURL: Constants.BASE_URL,
});
