import React, { useReducer } from 'react';

interface action {
    type: string;
}

function reducer(state: number, action: action): number{
    switch(action.type){
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1;
        default: 
            return 0;
    }    
}

function Counter(){
    //const [num, setNum] = useState(0);
    const [state, dispatch] = useReducer(reducer,0);
    
    const onIncrease = () => {
        dispatch({
            type:'INCREASE',
        });
    }

    const onDecrease = () => {
        dispatch({
            type:'DECREASE',
        });
    }
    
    return(
        <>
        <div>
            <h1>{state}</h1>
        </div>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
        </>
    )    
}

export default Counter;