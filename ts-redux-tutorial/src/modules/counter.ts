import {ActionType, createReducer, createAction } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increase_by = createAction(INCREASE_BY)<number>();

type CounterState = {
    count: number
}


const initialState: CounterState = {
    count: 0, 
 }

const actions = {increase, decrease, increase_by};
type CounterAction = ActionType<typeof actions>;

const CounterReducer = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, (state) => ({ count: state.count+1 }))
    .handleAction(decrease, (state) => ({ count: state.count-1 }))
    .handleAction(increase_by, (state, action) => ({count: state.count+action.payload}))

export default CounterReducer;
/* export default function CounterReducer(state: CounterState = initialState, action: CounterAction): CounterState {
    switch(action.type){
        case INCREASE: 
            return {
                ...state,
                counter: state.counter+1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter-1
            }
        case INCREASE_BY:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default: 
            return{
                ...state,
            }
    }
}
 */