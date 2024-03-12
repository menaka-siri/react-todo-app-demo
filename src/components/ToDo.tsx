import React, { useState } from "react";
// import { useRef } from "react";
import { MdDelete } from "react-icons/md";

const ToDo = () => {
  // we can reset the input field value by using useRef
  // but the easiset way would be to set the value prop of input field to the useState variable value
  // const inputTaskRef = useRef<HTMLInputElement>(null);
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([
    { id: 1, description: "Sample Task 1" },
  ]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.target.value);
  };

  const handleAdd = () => {
    if (inputTask !== "") {
      setTaskList([
        ...taskList,
        { id: taskList.length + 1, description: inputTask },
      ]);
      setInputTask("");
    }
  };

  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1> My ToDo App</h1>
      <div className="container mt-5 mb-3">
        <div className="row align-items-center">
          <div className="col-10">
            <input
              id="text"
              type="text"
              // ref={inputTaskRef}
              value={inputTask}
              className="col form-control"
              placeholder="Enter a task"
              onChange={(event) => handleInput(event)}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={handleAdd}>
              ADD
            </button>
          </div>
        </div>
      </div>
      <h3>List</h3>
      <ul className="list-group">
        {taskList.map((item) => (
          <li className="list-group-item" id={item.id.toString()} key={item.id}>
            {item.description}{" "}
            <button
              type="button"
              className="btn btn-danger"
              style={{
                "--bs-btn-padding-x": "8px",
                "--bs-btn-padding-y": "5px",
              }}
              onClick={() => handleDelete(item.id)}
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
