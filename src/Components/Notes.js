import {
  Edit,
  Delete,
  DeleteOutlined,
  Archive,
  ArchiveOutlined,
  ShoppingCart,
  Comment,
  Flag,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllNotes, archiveAllNotes } from "../action/index";

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const icons = {
    "Random thought": <Flag />,
    Task: <ShoppingCart />,
    Idea: <Comment />,
  };

  let dateFromUnixTime = (time) => {
    return new Date(time).toLocaleDateString("us-EN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  let handleDeleteAll = () => {
    dispatch(deleteAllNotes());
  };

  let handleArchiveAll = () => {
    console.log("Archive All");
    dispatch(archiveAllNotes("archive"));
  };

  let handleEdit = () => {
    console.log("Edit");
  };

  let handleArchive = () => {
    console.log("Archive");
  };

  let handleDelete = () => {
    console.log("Delete");
  };

  let handleAddNoteButtom = () => {
    console.log("Add note");
  };

  return (
    <div className="Notes">
      <h2>Actual notes</h2>

      <table className="notes-table">
        <thead>
          <tr id="all-content">
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th></th>
            <th>
              <ArchiveOutlined onClick={handleArchiveAll} />
            </th>
            <th>
              <DeleteOutlined onClick={handleDeleteAll} />
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {notes.map((elem) => (
            <tr key={elem.created}>
              <td>{icons[elem.category]}</td>
              <td>{elem.name}</td>
              <td>{dateFromUnixTime(+elem.created)}</td>
              <td>{elem.category}</td>
              <td>{elem.content}</td>
              <td>{elem.dates}</td>
              <td>
                <Edit onClick={handleEdit} />
              </td>
              <td>
                <Archive onClick={handleArchive} />
              </td>
              <td>
                <Delete onClick={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="9">
              <button
                className="buttom create-note"
                onClick={handleAddNoteButtom}
              >
                Create Note
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

      <p></p>
    </div>
  );
}

export default Notes;
