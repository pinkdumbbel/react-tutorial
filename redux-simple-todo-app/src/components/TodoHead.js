import React from 'react';
import styled from 'styled-components';
import TodoCreate from './TodoCreate';

const TodoHeadBlock = styled.div`
    width:100%;
    height: 150px;
    background: #22b8cf;
    text-align:center;
    line-height:150px;
    h1 {
    margin: 0;
    font-size: 36px;
    color: white;
    font-weight:lighter;
  }
`;

function TodoHead({ onCreate }) {
    return (
        <>
            <TodoHeadBlock>
                <h1>오늘 할 일</h1>
            </TodoHeadBlock>
            <TodoCreate onCreate={onCreate} />
        </>
    );
}

export default TodoHead;