import React from 'react';

function CounterComponent({ number, onIncrease, onDecrease }) {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default CounterComponent;