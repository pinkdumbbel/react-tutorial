import { combineReducers } from 'redux';
import CounterReducer from './counter';
import TodosReducer from './todos';
import GithubReducer, { githubSaga } from '../api';
import { all } from '@redux-saga/core/effects';

const rootReducer = combineReducers({
    CounterReducer,
    TodosReducer,
    GithubReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

export function* rootSaga() {
    yield all([githubSaga()]);
}