import initialState from "../store/initialState";

const noteReducers = (state = initialState.notes, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      console.log("we add new note");
      return [
        ...state,
        {
          name: action.name,
          created: action.created,
          category: action.category,
          content: action.content,
          dates: action.dates,
          status: action.status,
        },
      ];
    case "EDIT_NOTE":
      console.log("we edit note");
      return [
        ...state.map((elem) =>
          elem.created === action.created
            ? {
                ...elem,
                name: action.name,
                category: action.category,
                content: action.content,
                dates: action.dates,
              }
            : elem
        ),
      ];
    case "ARCHIVE_NOTE": {
      console.log("we archive one note from store");
      console.log(action.created);
      return [
        ...state.map((elem) =>
          elem.created === action.created
            ? { ...elem, status: "archive" }
            : elem
        ),
      ];
    }
    case "DELETE_NOTE": {
      console.log("we delete one note from store");
      return [...state.filter((elem) => elem.created !== action.created)];
    }
    case "DELETE_ALL_NOTES": {
      console.log("we delete all notes from store");
      return [];
    }
    case "ARCHIVE_ALL_NOTES": {
      console.log("we archive all notes from store");
      return [
        ...state.map((elem) =>
          elem.status === "active" ? { ...elem, status: "archive" } : elem
        ),
      ];
    }
    default:
      return state;
  }
};

export default noteReducers;
