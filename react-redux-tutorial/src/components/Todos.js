import React, { useState } from 'react';

//TODOS
//TODOLIST
//TODOITEMS
function TodoItems({ todo, onToggle }) {
    return (
        <li
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
}
function TodosList({ todos, onToggle }) {
    return (
        <ul>
            {
                todos.map(todo =>
                    <TodoItems todo={todo} key={todo.id} onToggle={onToggle} />)
            }
        </ul>
    );
}

function Todos({ todos, onCreate, onToggle }) {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText(''); // 인풋 초기화
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onChange} />
                <button type="submit">등록</button>
            </form >
            <TodosList todos={todos} onToggle={onToggle} />
        </>
    );
}

export default Todos;