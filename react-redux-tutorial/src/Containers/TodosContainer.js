import React from 'react';
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../module/todos';

function TodosContainer() {
    const todos = useSelector(state => state.todos);

    console.log(todos);

    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));
    const onToggle = (id) => dispatch(toggleTodo(id));

    return (
        <Todos
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    );
}

export default TodosContainer;