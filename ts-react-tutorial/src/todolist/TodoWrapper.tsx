import TodoWrapperStyle from './styles/TodoWrapperStyle';

interface TodoProps{
    children: React.ReactNode;
}

function TodoWrapper({children}: TodoProps) {
    return(
        <TodoWrapperStyle>
            {children}
        </TodoWrapperStyle>
            
    )
}

export default TodoWrapper;