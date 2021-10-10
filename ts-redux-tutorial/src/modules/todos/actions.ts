import { deprecated } from 'typesafe-actions';
const {createStandardAction} = deprecated;

export const ADDTODO = 'todos/ADDTODO' as const;
export const TOGGLETODO = 'todos/TOGGLETODO' as const;
export const DELETETODO = 'todos/DELETETODO' as const;

let nextId = 1;

export const addTodo = (todo: string) => ({
    type: ADDTODO,
    payload:{
        id:nextId++,
        todo,
    }
})
export const toggleTodo = createStandardAction(TOGGLETODO)<number>();
export const deleteTodo = createStandardAction(DELETETODO)<number>();