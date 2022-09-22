import React, { useState } from "react";
import "./App.css";

const Test = () => {
  const [toDoList, setToDoList] = useState([]);
  const [value, setValue] = useState("");
  const [itemId, setItemId] = useState(1);

  const makeToDo = (e) => {
    setValue(e.target.value);
  };

  const submitToDo = (e) => {
    e.preventDefault();
    if (value.length === 0) return;

    const newToDoList = {
      id: itemId,
      title: value,
      complete: false,
    };
    setToDoList((prev) => [...prev, newToDoList]);
    setItemId((prev) => prev + 1);
    setValue("");
  };

  const switchComplete = () => {};

  const removeTodo = (id) => {
    const filteredTodo = toDoList.filter((list) => list.id !== id);
    setToDoList(filteredTodo);
  };
  return (
    <div className="container">
      <div className="toDoBlock">
        <div>
          <h1>할 일 목록</h1>
        </div>

        {toDoList.map((list) => (
          <div key={list.id}>
            <input type="checkbox" defaultChecked={list.complete} onClick={switchComplete} />
            {list.title}
            <button onClick={() => removeTodo(list.id)}>X</button>
          </div>
        ))}

        <form onSubmit={submitToDo}>
          <input placeholder="할 일 입력하기" name="toDo" value={value} onChange={makeToDo} />
          <button type="submit">입력</button>
        </form>
      </div>
    </div>
  );
};

export default Test;
