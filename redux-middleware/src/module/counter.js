const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

const initialState = 0;

/* 
    redux-thunk: 위의 increase와 다르게 객체를 반환하는것이 아닌 함수를 반환함 
*/
export const increaseAsync = () => (thunkDispatch) => {
    setTimeout(() => {
        thunkDispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => (thunkDispatch) => {
    setTimeout(() => {
        thunkDispatch(decrease());
    }, 1000);
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}