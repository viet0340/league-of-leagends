import { combineReducers } from "redux";
import champions from "./champions";
import input from "./input";
import tags from "./tags";
import position from "./position";
import user from "./user";
const reducer = combineReducers({
  champions: champions,
  input: input,
  tags: tags,
  position: position,
  user: user,
});

export default reducer;
