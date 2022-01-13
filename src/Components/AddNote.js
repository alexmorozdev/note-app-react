import { useDispatch } from "react-redux";
import { addNewNote } from "../action/index";

function AddNote() {
  const dispatch = useDispatch();

  let handleAddNoteButtom = (event) => {
    event.target.parentElement.parentElement.children[1].classList.remove(
      "hide"
    );
  };

  const formHandler = (event) => {
    event.preventDefault();
    let data = event.target;
    let name = data.name.value;
    let created = Date.now().toString();
    let category = data.category.value;
    let content = data.content.value;
    const regExp =
      /(0?[1-9]|[12][0-9]|3[01])[\/.\/](0?[1-9]|1[012])[\/.\/]([0-2]\d{3}|\d{2})/gm;
    let dates = "";
    if (content.match(regExp)) {
      dates = content.match(regExp).join(", ");
    }
    let status = "active";
    dispatch(addNewNote(name, created, category, content, dates, status));
    data.category.value = "";
    data.name.value = "";
    data.content.value = "";
    event.target.classList.add("hide");
  };

  return (
    <div>
      <div className="action-button">
        <button className="buttom" onClick={handleAddNoteButtom}>
          Create Note
        </button>
      </div>
      <form onSubmit={formHandler} className="edit-form hide">
        <h2>Add note</h2>
        <div>
          <label>Note type: </label>
          <select name="category" required="required">
            <option defaultValue="">Choose a note type</option>
            <option defaultValue="Task">Task</option>
            <option defaultValue="Random thought">Random thought</option>
            <option defaultValue="Idea">Idea</option>
          </select>
        </div>
        <div>
          <label>Note title: </label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label>Note text: </label>
          <textarea name="content"></textarea>
        </div>
        <div className="action-button">
          <button className="buttom" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
