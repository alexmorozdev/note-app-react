import "./App.css";
import Notes from "../Components/Notes";
import NoteStatus from "../Components/NoteStatus";
import ArchivedNotes from "../Components/ArchivedNotes";
import AddNote from "../Components/AddNote";

function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Notes />
      <AddNote />
      <NoteStatus />
      <ArchivedNotes />
    </div>
  );
}

export default App;
