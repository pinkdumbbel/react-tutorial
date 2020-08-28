import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdClear } from "react-icons/md";

const TodoItemBlock = styled.div`
    width: 100%;
    height: 60px;
    display:flex;
    align-items:center;

    &:hover{
        cursor:pointer;
        background:#e3fafc
    }

    ${(props) => (
        props.done &&
        css`
            text-decoration:line-through;
            color:#ced4da;
        `
    )}
`;

const TodoDelete = styled.div`
    width:10%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:red;
`;

const TodoText = styled.div`
    width:80%;
    font-size:16px;
    font-weight:bold;
`;
const TodoComplete = styled.div`
    display:flex;
    jusify-content:center;
    width:10%;
    color:#22b8cf;
`;

function TodoItem({ todo, onToggle, onDelete }) {
    const { id, todo: task, done } = todo;

    return (
        <>

            <TodoItemBlock onClick={() => onToggle(id)} done={done}>
                <TodoDelete onClick={() => onDelete(id)}><MdClear /></TodoDelete>
                <TodoText>{task}</TodoText>
                <TodoComplete>{done && <MdDone />}</TodoComplete>
            </TodoItemBlock>
        </>
    );
}

export default TodoItem;