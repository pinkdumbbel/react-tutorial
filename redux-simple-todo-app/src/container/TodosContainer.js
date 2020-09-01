import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, completeTodo, modifyTodo, deleteTodo } from '../module/todos';

function TodosContainer() {
    const todos = useSelector(state => state.todos);

    console.log(todos);

    const dispatch = useDispatch();

    const onCreate = (todo) => dispatch(createTodo(todo));
    const onToggle = (id, modFlag) => dispatch(completeTodo(id, modFlag));
    const onDelete = (id) => dispatch(deleteTodo(id));
    const onModify = (id, text) => dispatch(modifyTodo(id, text));

    return (
        <TodoTemplate
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
            onDelete={onDelete}
            onModify={onModify}
        />
    );
}

export default TodosContainer;