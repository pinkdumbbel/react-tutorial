import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {RootState} from '../modules';
import { decrease, increase, increase_by } from '../modules/counter';

function CounterContainer() {
    const count = useSelector((state: RootState)=> state.CounterReducer.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase())
    };

    const onDecrease = () => 
        {dispatch(decrease())
    };
    const onIncreaseBy = (diff: number) => {
        dispatch(increase_by(diff))
    };

    return (
        <Counter 
            count={count}
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
            onIncreaseBy = {() => onIncreaseBy(5)} />
    )
}

export default CounterContainer;