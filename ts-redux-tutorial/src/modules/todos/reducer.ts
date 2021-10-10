import { createReducer } from 'typesafe-actions';
import {todoState, TodoAction} from './types';
import {ADDTODO, TOGGLETODO, DELETETODO} from './actions';

const initialState: todoState[] = [];

const TodosReducer = createReducer<todoState[], TodoAction>(initialState, {
    [ADDTODO]: (state, action) =>
      state.concat({
        ...action.payload, // id, text 를 이 안에 넣기
        done: false
      }),
    // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
    [TOGGLETODO]: (state, { payload: id }) =>
      state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [DELETETODO]: (state, { payload: id }) =>
      state.filter(todo => todo.id !== id)
});

export default TodosReducer;