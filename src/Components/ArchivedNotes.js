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
import {
  unarchiveNote,
  deleteNote,
  deleteAllNotes,
  unarchiveAllNotes,
  editNote,
} from "../action/index";

function ArchivedNotes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const archiveNotes = notes.filter((elem) => elem.status === "archive");
  const icons = {
    "Random thought": <Flag />,
    Task: <ShoppingCart />,
    Idea: <Comment />,
  };
  let handleDeleteAll = () => {
    dispatch(deleteAllNotes());
  };

  let handleUnarchiveAll = () => {
    dispatch(unarchiveAllNotes());
  };

  let handleEditArchive = (event) => {
    let currentId = event.target.parentNode.parentNode.parentNode.id;
    let currentNote = archiveNotes.filter(
      (elem) => elem.created === currentId
    )[0];
    dispatch(
      editNote(
        currentNote.name,
        currentNote.created,
        currentNote.category,
        currentNote.content
      )
    );
    console.log("Edit");
  };

  let handleUnarchive = (event) => {
    let currentId = event.target.parentNode.parentNode.parentNode.id;
    dispatch(unarchiveNote(currentId));
    console.log("unarchive");
  };

  let handleDelete = (event) => {
    let currentId = event.target.parentNode.parentNode.parentNode.id;
    dispatch(deleteNote(currentId));
  };

  return (
    <div className={archiveNotes.length ? "" : "hide"}>
      <h2>Archived notes</h2>
      <table className="archived-notes-table">
        <thead>
          <tr id="archived-content">
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th></th>
            <th>
              <ArchiveOutlined onClick={handleUnarchiveAll} />
            </th>
            <th>
              <DeleteOutlined onClick={handleDeleteAll} />
            </th>
          </tr>
        </thead>
        <tbody className="archived-table-body">
          {archiveNotes.map((elem) => (
            <tr key={elem.category + elem.created} id={elem.created}>
              <td>{icons[elem.category]}</td>
              <td>{elem.name}</td>
              <td>{elem.category}</td>
              <td>
                <Edit name={elem.created} onClick={handleEditArchive} />
              </td>
              <td>
                <Archive name={elem.created} onClick={handleUnarchive} />
              </td>
              <td>
                <Delete name={elem.created} onClick={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default ArchivedNotes;
