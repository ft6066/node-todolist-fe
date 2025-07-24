import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${task.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{task.task}</div>

          <div>
            <button
              className="button-delete"
              onClick={() => deleteTask(task._id)}
            >
              삭제
            </button>
            <button
              className="button-delete"
              onClick={() => toggleComplete(task._id)}
            >
              {task.isComplete ? "되돌리기" : "완료하기"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
