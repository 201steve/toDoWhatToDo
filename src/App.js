import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = { id: Date.now(), title: value, completed: false };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default App;
