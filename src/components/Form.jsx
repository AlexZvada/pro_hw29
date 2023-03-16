import { useState } from "react";
const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const handleInputTitleChange = (e) => setInputTitle(e.target.value);
  const handleInputTextChange = (e) => setInputText(e.target.value);

  const [notes, setNotes] = useState([]);
  const render = () => (
    <ul className="todo">
      {notes.map(({ title, body, id }) => (
        <li key={id} className="todo-item">
          <>
            <h2>{title}</h2>
            <p>{body}</p>
          </>
        </li>
      ))}
    </ul>
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inputTitle,
        body: inputText,
        userId: 4258,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setInputText("");
    setInputTitle("");
    const noteFromServer = await response.json();
    setNotes([...notes, noteFromServer]);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleInputTitleChange}
          value={inputTitle}
          placeholder = "Enter title"
          required
        />
        <input
          type="text"
          onChange={handleInputTextChange}
          value={inputText}
          placeholder = "Enter text"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {render()}
    </div>
  );
};

export default Form;
