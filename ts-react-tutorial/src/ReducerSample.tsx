import React from 'react';
import {UseContext} from './ContextSample';

interface action{
    type: 'SET_COUNT' | 'SET_TEXT' | 'SET_COLOR' | 'TOGGLE_GOOD'
}


function ReducerSample(){
    const {state, dispatch} = UseContext()
    
    const setState = (param: action) => {
        dispatch({
            ...param
        })
    }

    return (
        <div>
            <div>
                <h1>count: {state.count}</h1>
                <h1>text: {state.text}</h1>
                <h1>color: {state.color}</h1>
                <h1>isGood: {state.isGood ? 'true' : 'false'}</h1>
            </div>
            <div>
                <button onClick = {() => setState({type:'SET_COUNT'})}>SET_COUNT</button>
                <button onClick = {() => setState({type:'SET_TEXT'})}>SET_TEXT</button>
                <button onClick = {() => setState({type:'SET_COLOR'})}>SET_COLOR</button>
                <button onClick = {() => setState({type:'TOGGLE_GOOD'})}>TOGGLE_GOOD</button>
            </div>
        </div>
    )
}

export default ReducerSample;