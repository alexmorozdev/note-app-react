import EditNote from "./EditNote";

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
  archiveNote,
  deleteNote,
  deleteAllNotes,
  archiveAllNotes,
  editNote,
} from "../action/index";

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const activeNotes = notes.filter((elem) => elem.status === "active");
  // console.log(activeNotes);
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
    dispatch(archiveAllNotes());
  };

  let handleEdit = (event) => {
    let currentId = event.target.parentNode.parentNode.parentNode.id;
    let currentNote = activeNotes.filter(
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
  };

  let handleArchive = (event) => {
    let currentId = event.target.parentNode.parentNode.parentNode.id;
    dispatch(archiveNote(currentId));
  };

  let handleDelete = (event) => {
    let currentId = event.target.parentNode.parentNode.parentNode.id;
    dispatch(deleteNote(currentId));
  };

  return (
    <>
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
          {activeNotes.map((elem) => (
            <tr key={elem.created + elem.category} id={elem.created}>
              <td>{icons[elem.category]}</td>
              <td>{elem.name}</td>
              <td>{dateFromUnixTime(+elem.created)}</td>
              <td>{elem.category}</td>
              <td>{elem.content}</td>
              <td>{elem.dates}</td>
              <td>
                <Edit name={elem.created} onClick={handleEdit} />
              </td>
              <td>
                <Archive name={elem.created} onClick={handleArchive} />
              </td>
              <td>
                <Delete name={elem.created} onClick={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="edit-note ">
        <EditNote />
      </div>
    </>
  );
}

export default Notes;
