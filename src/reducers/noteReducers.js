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
    case "DELETE_ALL_NOTES": {
      console.log("we delete all notes from store");
      return [];
    }
    case "ARCHIVE_ALL_NOTES": {
      console.log("we archive all notes from store");
      let newState = state.slice();
      console.log(newState);
      for (let i = 0; i < newState.length; i++) {
        newState[i].status = "archive";
      }
      console.log(newState);
      return [...state, state.map(elem => {...elem, elem.status = 'archive'})];
    }
    default:
      return state;
  }
};

export default noteReducers;
