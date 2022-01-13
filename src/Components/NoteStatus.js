import { ShoppingCart, Comment, Flag } from "@material-ui/icons";
import { useSelector } from "react-redux";

function NoteStatus() {
  const notes = useSelector((state) => state.notes);
  let noteCount = (status, category) => {
    return notes.reduce(function (acc, item) {
      return item.status === status && item.category === category
        ? acc + 1
        : acc;
    }, 0);
  };

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
            <td>{noteCount("active", "Task")}</td>
            <td>{noteCount("archive", "Task")}</td>
          </tr>
          <tr>
            <td>
              <Comment />
            </td>
            <td>Idea</td>
            <td>{noteCount("active", "Idea")}</td>
            <td>{noteCount("archive", "Idea")}</td>
          </tr>
          <tr>
            <td>
              <Flag />
            </td>
            <td>Random thought</td>
            <td>{noteCount("active", "Random thought")}</td>
            <td>{noteCount("archive", "Random thought")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NoteStatus;
