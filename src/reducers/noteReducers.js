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
    case "ADD_EDIT_NOTE": {
      console.log("we add new note");
      return [
        ...state.map((elem) =>
          elem.created === action.created
            ? {
                ...elem,
                name: action.name,
                created: action.created,
                category: action.category,
                content: action.content,
                dates: action.dates,
              }
            : elem
        ),
      ];
    }
    case "ARCHIVE_NOTE": {
      return [
        ...state.map((elem) =>
          elem.created === action.created
            ? { ...elem, status: "archive" }
            : elem
        ),
      ];
    }
    case "UNARCHIVE_NOTE": {
      return [
        ...state.map((elem) =>
          elem.created === action.created ? { ...elem, status: "active" } : elem
        ),
      ];
    }
    case "DELETE_NOTE": {
      return [...state.filter((elem) => elem.created !== action.created)];
    }
    case "DELETE_ALL_NOTES": {
      return [];
    }
    case "ARCHIVE_ALL_NOTES": {
      return [
        ...state.map((elem) =>
          elem.status === "active" ? { ...elem, status: "archive" } : elem
        ),
      ];
    }
    case "UNARCHIVE_ALL_NOTES": {
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
