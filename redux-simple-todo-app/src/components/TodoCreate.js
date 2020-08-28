import React, { useState } from 'react';
import styled from 'styled-components';

const TodoCreateBlock = styled.div`
    width: 100%;
    height:100px;
`;

const TodoCreateForm = styled.form`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const TodoCreateInput = styled.input`
    width: 350px;
    border:none;
    outline:none;
    border-bottom: 1px solid #99e9f2;
`;

const TodoCreateBtn = styled.button`
    width:60px;
    height:30px;
    background:#22b8cf;
    border:1px solid #22b8cf;
    outline:none;
    border-radius: 5px;
    margin-left:20px;
    color:white;
    font-weight:bold;
    &:hover{
        background:#66d9e8;
        cursor:pointer;
    }
    &:active{
        background:#0c8599;
    }
`;

function TodoCreate({ onCreate }) {
    const [text, setText] = useState('');
    const onChange = e => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        console.log(text);

        setText('');
    };

    return (
        <TodoCreateBlock>
            <TodoCreateForm onSubmit={onSubmit}>
                <TodoCreateInput
                    name='todo'
                    value={text}
                    onChange={onChange}
                />
                <TodoCreateBtn>추가</TodoCreateBtn>
            </TodoCreateForm>
        </TodoCreateBlock>
    );
}

export default TodoCreate;