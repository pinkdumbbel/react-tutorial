import React from 'react';
import CounterComponent from '../components/CounterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../module/counter';

function CounterContainer() {

    const number = useSelector(state => state.counter);


    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increaseAsync());
    const onDecrease = () => dispatch(decreaseAsync());

    return (
        <CounterComponent number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
}

export default CounterContainer;