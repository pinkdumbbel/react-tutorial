import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../lib/reducerUtil';
import * as actions from './actions';
import { GithubProfile } from './github';

export type GithubActions = ActionType<typeof actions>;
export type GithubState = {
    userProfile: AsyncState<GithubProfile, Error>
}