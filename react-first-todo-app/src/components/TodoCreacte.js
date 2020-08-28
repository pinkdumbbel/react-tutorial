import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoState } from "./TodoContext";

const CircleButton = styled.button`
  width: 80px;
  height: 80px;
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
  border: none;

  font-size: 60px;
  color: white;
  outline: none;
  transition: all ease 0.25s;
  ${(props) =>
    props.open &&
    css`
      background: #ff8787;
      transform: translate(-50%, 50%) rotate(45deg);
      &:hover {
        background: #ffa8a8;
      }
      &:active {
        background: #ff6b6b;
      }
    `};
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
`;

const InsertBlock = styled.form`
  background: #f1f3f5;
  width: 100%;
  height: 180px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 32px 16px 72px 16px;
  box-sizing: border-box;
`;

const InsertInput = styled.input`
  display: block;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  border: 1px solid #dee2e6;
  border-radius: 7px;
  font-size: 20px;
  outline: none;
`;

function TodoCreacte() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoState().tasks.length + 1;

  const onOpen = () => {
    setOpen(!open);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId,
        done: false,
        list: value,
      },
    });
    setValue("");
    setOpen(!open);
  };
  const onChange = (e) => setValue(e.target.value);
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertBlock onSubmit={onSubmit}>
            <InsertInput
              name="task"
              onChange={onChange}
              placeholder="할 일을 입력 후, Enter 를 누르세요 "
              value={value}
            />
          </InsertBlock>
        </InsertFormPositioner>
      )}

      <CircleButton open={open} onClick={onOpen}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreacte;
