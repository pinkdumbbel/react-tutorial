import React,{ useState, useCallback, useReducer } from 'react';

function reducer(state, action){
    //CHANGE
    //RESET
    switch(action.type)
    {
        case 'CHANGE': 
        console.log(state);
        return {
            ...state,
            [action.name]:action.value
        };

        case 'RESET':
        return {
            username:'',
            email:''
        };
    }
}

function useInputs(initialForm){
    const [form, dispatch] = useReducer(reducer,initialForm);
    const onChange = useCallback(e => {
        const {name,value} = e.target;
        dispatch({
            type:'CHANGE',
            name,
            value
        })
    });

    const reset = () => {
        dispatch({
            type:'RESET',
            form,
        })
    }
    return [form, onChange, reset];
}

export default useInputs;