import { useState } from react;

export default function Form(props) {
    const [text, setText] = useState(props.text);
    const [newText, setNewText] = useState("");
    const handleChange = (e) => {
      setText(e.target.value);
    };
    const AddNewItem = (e) => {
      e.preventDefault();
      setNewText(text.toUpperCase());
      setText("");
    };
    return (
      <form>
        <div>
          <input onChange={handleChange} type="text" value={text} />
          <button type="submit" onClick={AddNewItem}>
            {" Добавить"}
          </button>
        </div>
        <div> {newText}</div>
      </form>
    );
  }