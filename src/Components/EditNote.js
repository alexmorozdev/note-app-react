import { useSelector } from "react-redux";

function EditNote(props) {
  const notes = useSelector((state) => state.notes);

  // const [category, setCategory] = useState(props.category);
  console.log(props);
  return (
    <form className="edit-form">
      <h2>Edit note</h2>
      <div className="edit-value">
        <label>Note type: </label>
        <select name="category" required="required" id="edit-category">
          <option value="">{category}</option>
          <option value="task">Task</option>
          <option value="thought">Random thought</option>
          <option value="idea">Idea</option>
        </select>
      </div>
      <div>
        <label>Note title: </label>
        <input required="required" type="text" name="name" id="edit-name">
          {props.name}
        </input>
      </div>
      <div>
        <label>Note text: </label>
        <textarea name="content" id="edit-content">
          {props.content}
        </textarea>
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
