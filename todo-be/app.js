// 할 일 앱

// restful API란
// 주소 + http 명령어
// 예시) Tasks post
//      Tasks get
//      Tasks put
//      Tasks delete

// 1. 할 일을 추가할 수 있다. C /tasks post
// 2. 할 일 리스트를 볼 수 있다. R /tasks get
// 3. 할 일에 대해서 끝남, 안 끝남 표시를 할 수 있다. U /tasks/:id put
// 4. 할 일을 삭제할 수 있다. D /tasks/:id delete

// 백엔드 준비
// 1. 기본세팅 : npm세팅, express, mongoose, app리스너
// 2. 라우터 주소 정의
// 3. 데이터베이스 스키마 정의
// 4. 기능정의 : CRUD
// 5. 테스트 : 포스트맨

// 프론트엔드 준비
// 1. 깃 클론
// 2. 기능만들기 : CRUD
// 3. 테스트

// 1. 기본세팅
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(6500, () => {
  console.log("서버 6500번 열림");
});
