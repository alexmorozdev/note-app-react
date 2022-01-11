import { useDispatch } from "react-redux";
import { addNewNote } from "../action/index";

function AddNote() {
  const dispatch = useDispatch();
  const formHandler = (event) => {
    console.log(event.target.classList);
    event.preventDefault();
    let data = event.target;
    let name = data.name.value;
    let created = Date.now();
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
    // event.target.classList.add("hide");
  };

  return (
    <form onSubmit={formHandler} className="edit-form">
      <h2>Add note</h2>
      <div>
        <label>Note type: </label>
        <select name="category" required="required">
          <option value="">Choose a note type</option>
          <option value="Task">Task</option>
          <option value="Random thought">Random thought</option>
          <option value="Idea">Idea</option>
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
      <div className="form-footer">
        <button className="buttom" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddNote;

// <form onSubmit={formHandler}>
//   <div>
//     <label>
//       Passport:
//       <input type="text" name="passport" />
//     </label>
//   </div>
//   <div>
//     <label>
//       Name: <input type="text" name="name" />
//     </label>
//   </div>
//   <div>
//     <label>
//       Age:
//       <input type="number" name="age" />
//     </label>
//   </div>
//   <button type="submit">Send</button>
// </form>
