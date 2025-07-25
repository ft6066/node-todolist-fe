import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, toggleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
