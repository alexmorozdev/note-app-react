import initialState from "../store/initialState";

const editNoteReducers = (state = initialState.editNote, action) => {
  switch (action.type) {
    case "EDIT_NOTE": {
      console.log("we edit note");
      return {
        ...state,
        created: action.created,
        name: action.name,
        category: action.category,
        content: action.content,
      };
    }
    case "CLEAN_EDIT_NOTE": {
      console.log("we clean edit note");
      return {
        ...state,
        name: "",
        created: "",
        category: "",
        content: "",
      };
    }
    default:
      return state;
  }
};

export default editNoteReducers;
