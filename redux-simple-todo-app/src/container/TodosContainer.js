import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, completeTodo, deleteTodo } from '../module/todos';

function TodosContainer() {
    const todos = useSelector(state => state.todos);

    console.log(todos);

    const dispatch = useDispatch();

    const onCreate = (todo) => dispatch(createTodo(todo));
    const onToggle = (id) => dispatch(completeTodo(id));
    const onDelete = (id) => dispatch(deleteTodo(id));

    return (
        <TodoTemplate
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
            onDelete={onDelete}
        />
    );
}

export default TodosContainer;