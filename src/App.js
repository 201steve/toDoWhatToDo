import React, { useState } from "react";
import "./App.css";

export function App() {
  const [toDoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const removeItem = (id) => {
    let newTodoData = toDoData.filter((list) => list.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.length === 0) return;
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleCompleteChange = (id) => {
    let newToDoData = toDoData.map((data) => {
      if (id === data.id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newToDoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {toDoData.map((list) => (
          <div style={listStyle(list.completed)} key={list.id}>
            <input
              type="checkbox"
              defaultChecked={list.completed}
              onChange={() => {
                handleCompleteChange(list.id);
              }}
            />
            {list.title}
            <button
              onClick={() => {
                removeItem(list.id);
              }}
              style={btnStyle}
            >
              X
            </button>
          </div>
        ))}

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            onChange={handleChange}
            placeholder="해야 할 일을 입력하세요"
            value={value}
          />
          <button type="submit">입력</button>
        </form>
      </div>
    </div>
  );
}

export default App;
