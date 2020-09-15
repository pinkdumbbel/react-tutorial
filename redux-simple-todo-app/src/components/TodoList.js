import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    max-height: 180px;
    border-top:1px solid #22b8cf;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display:none;
    };
`;

function TodoList({ todos, onToggle, onDelete, onModify }) {
    const listRef = useRef(null);

    //할일 목록 추가시 스크롤 하단으로 가도록 
    useEffect(() => {
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }, [todos.length]);

    return (
        <TodoListBlock ref={listRef}>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onModify={onModify} />
                ))
            }
        </TodoListBlock>
    );
}

export default TodoList;