import React from 'react';
import { todoState } from '../modules/todos';

type propsType = {
    todo: string;
    todos: todoState[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onToggle: (id:number) => void;
    onDelete: (id:number) => void;
}


function Todos({todo, todos, onChange, onSubmit, onToggle, onDelete}: propsType) {

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    name='todo' 
                    value={todo} 
                    onChange={onChange}/>
                <button>등록</button>
            </form>
            <ul>
                {todos.map((e: todoState) => {
                    return (<li key={e.id} 
                                onClick={() => onToggle(e.id)}>
                                    <span style={e.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                                        {e.todo} 
                                    </span>
                                    <span 
                                        onClick={() => onDelete(e.id)}
                                        style={{color:'red'}}>(X)</span>
                            </li>)
                })}
            </ul>
        </>
    )
}

export default Todos;