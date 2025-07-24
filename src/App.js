import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import api from "./utils/api";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const getTasks = async () => {
    const response = await api.get("/tasks");
    console.log("rrrr", response);
    setTodoList(response.data.data);
  };

  const addTask = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("성공");
        // 1. 입력한 값이 안 사라짐
        setTodoValue("");
        // 2. 추가한 값이 안 보임
        getTasks();
      } else {
        throw new Error("task 추가 실패");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        console.log("삭제 성공");
        getTasks();
      } else {
        throw new Error("task 삭제 실패");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const targetTask = todoList.find((task) => task._id === id);
      const updatedTask = { isComplete: !targetTask.isComplete };
      const response = await api.put(`/tasks/${id}`, updatedTask);

      if (response.status === 200) {
        console.log("업데이트 성공");
        getTasks();
      } else {
        throw new Error("task 업데이트 실패");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(event) => setTodoValue(event.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>
            추가
          </button>
        </Col>
      </Row>

      <TodoBoard
        todoList={todoList}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </Container>
  );
}

export default App;
