import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdClear, MdCreate } from "react-icons/md";

const TodoItemBlock = styled.div`
    width: 100%;
    height: 60px;
    display:flex;
    align-items:center;
    border-bottom: 1px solid #22b8cf;
    
    &:hover{
        input {
            background:#e3fafc
        }
        cursor:pointer;
        background:#e3fafc
    }
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

const TodoModifyForm = styled.form`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
`;

const TodoModiFyInput = styled.input`
    width: 100%;
    height: 100%;
    border:none;
    cursor:pointer;
    outline:none;

    ${(props) => (
        (props.done && props.modFlag === false) &&
        css`
            text-decoration:line-through;
            color:#ced4da;
        `
    )}
`;

const TodoComplete = styled.div`
    display:flex;
    jusify-content:center;
    width:5%;
    color:#22b8cf;
`;

const TodoModify = styled.div`
    display:flex;
    jusify-content:center;
    width:5%;
    color:#22b8cf;
`;

function TodoItem({ todo, onToggle, onDelete, onModify }) {
    const modRef = useRef(null);

    const { id, todo: task, done } = todo;

    const [modFlag, setModFlag] = useState(false);
    const [text, setText] = useState(task);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onModify(id, text);
        setModFlag(!modFlag);
    };

    const modifyFocus = () => {
        setModFlag(!modFlag);
        modRef.current.focus();
    };
    return (
        <>

            <TodoItemBlock>
                <TodoDelete onClick={() => onDelete(id)}><MdClear /></TodoDelete>
                <TodoText onClick={() => onToggle(id, modFlag)}>
                    <TodoModifyForm onSubmit={onSubmit}>
                        <TodoModiFyInput
                            ref={modRef}
                            value={text}
                            done={done}
                            modFlag={modFlag}
                            readOnly={modFlag ? "" : "readOnly"}
                            onChange={onChange}
                        />
                    </TodoModifyForm>
                </TodoText>
                <TodoModify onClick={() => modifyFocus()} ><MdCreate /></TodoModify>
                <TodoComplete>{done && <MdDone />}</TodoComplete>
            </TodoItemBlock>
        </>
    );
}

export default TodoItem;