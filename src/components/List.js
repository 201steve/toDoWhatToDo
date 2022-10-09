import React from "react";

const List = React.memo(
  ({ handleClick, id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    console.log("List is Rendering");

    const handleCompleteChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    };

    return (
      <div
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
          />
          <span className={completed ? "line-through" : undefined}>{title}</span>
        </div>
        <div className="items-center">
          <button onClick={() => handleClick(id)}>x</button>
        </div>
      </div>
    );
  }
);

export default List;
