import React, { createContext, Dispatch, useContext, useReducer } from 'react';

interface stateType{
    count: number;
    text: 'hello' | 'bye';
    color: 'red' | 'orange';
    isGood: boolean
}

interface action{
    type: 'SET_COUNT' | 'SET_TEXT' | 'SET_COLOR' | 'TOGGLE_GOOD'
}


const initialState: stateType = {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
}

function reducer(state: stateType, action:action): stateType{

    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: state.count+5
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: 'bye'
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: 'orange'
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            return {
                ...state,
            }
    }
}

const sampleStateContext = createContext<stateType | null>(null);
const sampleDispatchContext = createContext<Dispatch<action> | null>(null);

interface sampleProviderProps {
    children: React.ReactNode
}

export function SampleProvider({children}: sampleProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <sampleStateContext.Provider value={state}>
            <sampleDispatchContext.Provider value={dispatch}>
                {children}
            </sampleDispatchContext.Provider>
        </sampleStateContext.Provider>
    )
}

export function UseContext(){
    const state = useContext(sampleStateContext);
    const dispatch = useContext(sampleDispatchContext);
    if(!state || !dispatch) throw new Error('Cannot find Context');

    return {
        state,
        dispatch
    }
}