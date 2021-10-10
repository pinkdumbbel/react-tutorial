import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { RootState } from '../modules';
import { addTodo, deleteTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    const [todo, setTodo] = useState('');

    const todos = useSelector((state: RootState) => (state.TodosReducer));

    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTodo(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        dispatch(addTodo(todo));

        setTodo('');
    }

    const onToggle = (id: number) => {
        dispatch(toggleTodo(id));
    }

    const onDelete = (id:number) => {
        dispatch(deleteTodo(id));
    }

    return (
        <Todos 
            todo={todo}
            todos={todos}
            onChange={onChange}
            onSubmit = {onSubmit}
            onToggle = {onToggle}
            onDelete = {onDelete}
        />
    )
}

export default TodosContainer;