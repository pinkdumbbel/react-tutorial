//액션 타입 정의
const CREATETODO = 'CREATETODO';
const DELETETODO = 'DELETETODO';
const COMPLETETODO = 'COMPLETETODO';

//액션생성함수 정의
export const createTodo = (todo) => ({
    type: CREATETODO,
    todo,
    done: false
});
export const deleteTodo = (id) => ({
    type: DELETETODO,
    id
});
export const completeTodo = (id) => ({
    type: COMPLETETODO,
    id
});


//초기상태정의
let nextId = 1;

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case CREATETODO:
            return state.concat({ id: nextId++, todo: action.todo, done: action.done });

        case COMPLETETODO:
            return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case DELETETODO:
            return state.filter(todo => todo.id !== action.id);

        default:
            return state;
    }
}

