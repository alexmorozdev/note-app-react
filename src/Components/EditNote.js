import { useSelector, useDispatch } from "react-redux";
import { addEditNote, cleanEditNote } from "../action/index";

function EditNote() {
  const dispatch = useDispatch();
  const editNote = useSelector((state) => state.editNote);

  const formHandler = (event) => {
    event.preventDefault();
    let data = event.target;
    let created = editNote.created;
    let name = data.name.value;
    let category = data.category.value;
    let content = data.content.value;
    const regExp =
      /(0?[1-9]|[12][0-9]|3[01])[\/.\/](0?[1-9]|1[012])[\/.\/]([0-2]\d{3}|\d{2})/gm;
    let dates = "";
    if (content.match(regExp)) {
      dates = content.match(regExp).join(", ");
    }
    dispatch(addEditNote(name, created, category, content, dates));
    data.category.value = "";
    data.name.value = "";
    data.content.value = "";
    dispatch(cleanEditNote());
    console.log("edit note");
  };

  return (
    <form onSubmit={formHandler} className={editNote.category ? "" : ""}>
      <h2>Edit note</h2>
      <div className="edit-value">
        <label>Note type: </label>
        <select name="category" required="required" id="edit-category">
          <option defaultValue="">{editNote.category}</option>
          <option defaultValue="task">Task</option>
          <option defaultValue="thought">Random thought</option>
          <option defaultValue="idea">Idea</option>
        </select>
      </div>
      <div>
        <label>Note title: </label>
        <input
          required="required"
          type="text"
          name="name"
          defaultValue={editNote.name}
        ></input>
      </div>
      <div>
        <label>Note text: </label>
        <textarea name="content" defaultValue={editNote.content}></textarea>
      </div>
      <div>
        <button className="buttom" type="submit">
          Edit
        </button>
      </div>
    </form>
  );
}

export default EditNote;
