import React from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';
import TodoList from './TodoList';

const TodoTemplateWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items:center;
`;

const TodoTemplateContent = styled.div`
    width:512px;
    height:auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.84);
    background: white;
`;

function TodoTemplate({ todos, onCreate, onToggle, onDelete, onModify }) {
    return (
        <TodoTemplateWrapper>
            <TodoTemplateContent>
                <TodoHead onCreate={onCreate} />
                <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onModify={onModify} />
            </TodoTemplateContent>
        </TodoTemplateWrapper>
    );
}

export default TodoTemplate;