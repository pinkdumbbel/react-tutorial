import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const arr_Day = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

function getDate() {
  const today = new Date();
  const day = today.getDay(); // 요일
  return day;
}
function TodoHead() {
  const today = new Date();
  const day = arr_Day[getDate()];
  const count = useTodoState().tasks.filter((task) => task.done === false)
    .length;
  return (
    <TodoHeadBlock>
      <h1>
        <Moment format="YYYY년 MM월 DD일">{today}</Moment>
      </h1>
      <div className="day">{day}</div>
      <div className="tasks-left">할 일 {count}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
