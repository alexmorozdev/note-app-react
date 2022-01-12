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
      console.log("we archive one note");
      console.log(action.created);
      return [
        ...state.map((elem) =>
          elem.created === action.created
            ? { ...elem, status: "archive" }
            : elem
        ),
      ];
    }
    case "UNARCHIVE_NOTE": {
      console.log("we unarchive one note");
      console.log(action.created);
      return [
        ...state.map((elem) =>
          elem.created === action.created ? { ...elem, status: "active" } : elem
        ),
      ];
    }
    case "DELETE_NOTE": {
      console.log("we delete one note");
      return [...state.filter((elem) => elem.created !== action.created)];
    }
    case "DELETE_ALL_NOTES": {
      console.log("we delete all notes");
      return [];
    }
    case "ARCHIVE_ALL_NOTES": {
      console.log("we archive all notes");
      return [
        ...state.map((elem) =>
          elem.status === "active" ? { ...elem, status: "archive" } : elem
        ),
      ];
    }
    case "UNARCHIVE_ALL_NOTES": {
      console.log("we unarchive all notes");
      return [
        ...state.map((elem) =>
          elem.status === "archive" ? { ...elem, status: "active" } : elem
        ),
      ];
    }
    default:
      return state;
  }
};

export default noteReducers;
