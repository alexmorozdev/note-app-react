import { ShoppingCart, Comment, Flag } from "@material-ui/icons";
import { useSelector } from "react-redux";

function NoteStatus() {
  const notes = useSelector((state) => state.notes);
  const activeNotes = notes.filter((elem) => elem.status === "active");
  const archiveNotes = notes.filter((elem) => elem.status === "archive");
  const activeTasks = activeNotes.filter((elem) => elem.category === "Task");
  const activeIdeas = activeNotes.filter((elem) => elem.category === "Idea");
  const activeThoughts = activeNotes.filter(
    (elem) => elem.category === "Random thought"
  );
  const archiveTasks = archiveNotes.filter((elem) => elem.category === "Task");
  const archiveIdeas = archiveNotes.filter((elem) => elem.category === "Idea");
  const archiveThoughts = archiveNotes.filter(
    (elem) => elem.category === "Random thought"
  );

  return (
    <div className="archive">
      <h2>Notes status</h2>
      <table className="archive-table">
        <thead>
          <tr id="all-archive">
            <th></th>
            <th>Note Category</th>
            <th>Active</th>
            <th>Archived</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ShoppingCart />
            </td>
            <td>Task</td>
            <td>{activeTasks.length}</td>
            <td>{archiveTasks.length}</td>
          </tr>
          <tr>
            <td>
              <Comment />
            </td>
            <td>Idea</td>
            <td>{activeIdeas.length}</td>
            <td>{archiveIdeas.length}</td>
          </tr>
          <tr>
            <td>
              <Flag />
            </td>
            <td>Random thought</td>
            <td>{activeThoughts.length}</td>
            <td>{archiveThoughts.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NoteStatus;
