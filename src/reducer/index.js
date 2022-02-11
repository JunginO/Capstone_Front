import { combineReducers } from "redux";
import feedReducer from "./feed";
const rootReducer = combineReducers({
  value: feedReducer,
});

export default rootReducer;
