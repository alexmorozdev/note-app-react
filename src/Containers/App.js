import "./App.css";
import Notes from "../Components/Notes";
import NoteStatus from "../Components/NoteStatus";
import ArchivedNotes from "../Components/ArchivedNotes";
import AddNote from "../Components/AddNote";

function App() {
  return (
    <>
      <Notes />
      <AddNote />
      <NoteStatus />
      <ArchivedNotes />
    </>
  );
}

export default App;
