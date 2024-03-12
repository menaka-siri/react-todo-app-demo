import React, { useState } from "react";
// import { useRef } from 'react';
import { MdDelete } from "react-icons/md";

const ToDo = () => {
  // we can reset the input field value by using useRef
  // but the easiset way would be to set the value prop of inout field to the useState variable value
  // const inputTaskRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, description: "Sample Task 1" }]);



  return (
    <>
      <h1> My ToDo App</h1>
      <div className="mt-5 mb-3">
        <div className="row">
          <div className="col">
            <input
              id="text"
              type="text"
              // ref={inputTaskRef}
              value={text}
              className="col form-control"
              placeholder="Enter a task"
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (text !== "") {
                  setTasks([
                    ...tasks,
                    { id: tasks.length + 1, description: text },
                  ]);
                  setText('');
                  // if (inputTaskRef.current !== null) {
                  //   inputTaskRef.current.value = '';
                  // }
                  
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <h3>List</h3>
      <ul className="list-group">
        {tasks.map((item) => (
          <li className="list-group-item" id={item.id.toString()} key={item.id}>
            {item.description}{" "}
            <button
              type="button"
              className="btn btn-danger"
              style={{
                "--bs-btn-padding-x": "8px",
                "--bs-btn-padding-y": "5px",
              }}
              onClick={() => setTasks(tasks.filter((e) => e.id !== item.id))}
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;