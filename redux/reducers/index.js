import {combineReducers} from "redux";
import Settings from "./Settings";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";


const reducers = combineReducers({
  settings: Settings,
  notes: Notes,
  contact: Contact,
  common: Common,
});

export default reducers;
