import { combineReducers } from "redux";
import noteReducers from "./noteReducers";
import editNoteReducers from "./editNoteReducers";

export default combineReducers({
  notes: noteReducers,
  editNote: editNoteReducers,
});
