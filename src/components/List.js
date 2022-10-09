import React from "react";

const List = ({ todoData, setTodoData }) => {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => id !== data.id);
    setTodoData(newTodoData);
  };

  return (
    <>
      {todoData.map((data) => {
        return (
          <div style={listStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => handleCompleteChange(data.id)}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
