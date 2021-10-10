import { createReducer } from 'typesafe-actions';
import { asyncState, createAsyncReducer, transformToArray } from '../lib/reducerUtil';
import { getUserProfileAsync } from './actions';
import { GithubActions, GithubState } from './types';

const initialState: GithubState = {
    userProfile:asyncState.initial()
}


const GithubReducer = createReducer<GithubState, GithubActions>(initialState)
.handleAction(
    transformToArray(getUserProfileAsync),
    createAsyncReducer(getUserProfileAsync, 'userProfile')
)

export default GithubReducer;