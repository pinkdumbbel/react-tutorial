import TodoItemBoxStyle from './styles/TodoItemBoxStyle';

interface TodoProps{
    children: React.ReactNode;
}

function TodoItemBox({children}: TodoProps) {
    return (
        <TodoItemBoxStyle>
            {children}
        </TodoItemBoxStyle>
    )
}

export default TodoItemBox;