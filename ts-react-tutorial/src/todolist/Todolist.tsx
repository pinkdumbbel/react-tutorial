import TodoWrapper from './TodoWrapper';
import TodoTitle from './TodoTitle';
import TodoItemBox from './TodoItemBox';
import TodoItemInput from './TodoItemInput';

function Todolist() {
    return (
        <TodoWrapper>
            <TodoTitle/>
            <TodoItemBox>
                <TodoItemInput />
            </TodoItemBox>
        </TodoWrapper>
    )
}

export default Todolist;