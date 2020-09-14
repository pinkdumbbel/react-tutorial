import { delay, put, takeEvery, takeLeading } from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

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
/* export const increaseAsync = () => (thunkDispatch) => {
    setTimeout(() => {
        thunkDispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => (thunkDispatch) => {
    setTimeout(() => {
        thunkDispatch(decrease());
    }, 1000);
}; */

export const increaseAsync = () => ({
    type: INCREASE_ASYNC
});

export const decreaseAsync = () => ({
    type: DECREASE_ASYNC
});

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLeading(DECREASE_ASYNC, decreaseSaga);
}

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