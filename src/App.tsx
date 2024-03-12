import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, description: "Sample Task 1" }]);

  return (
    <>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Enter a task</label>
          <input
            id="text"
            type="text"
            className="form-control"
            onBlur={(event) => {
              setText(event.target.value);
              console.log(text);
            }}
          />
          <button
            className="btn btn-primary"
            onClick={(event) => {
              if (text !== "") {
                setTasks([
                  ...tasks,
                  { id: tasks.length + 1, description: text },
                ]);
                setText('');
              }
            }}
          >
            Add
          </button>
        </div>
      <h3>List</h3>
      <ul className="list-group">
        {tasks.map((item) => (
          <li className="list-group-item" id={item.id.toString()} key={item.id}>
            {item.description}{" "}
            <button
              className="btn btn-danger"
              onClick={() => setTasks(tasks.filter((e) => e.id !== item.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
