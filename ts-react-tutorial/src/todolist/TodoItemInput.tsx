import TodoItemWrapperStyle, {IconBlock, TodoItemFormStyle, TodoItemInputStyle, Unfold } from './styles/TodoItemInputStyle';

function TodoItemInput() {
    return(
        <TodoItemWrapperStyle>
            <IconBlock>
                <Unfold />
            </IconBlock>
            <TodoItemFormStyle>
                <TodoItemInputStyle 
                type='text'
                placeholder="What's need to be done?" 
                />
            </TodoItemFormStyle>
        </TodoItemWrapperStyle>
    )
}

export default TodoItemInput;