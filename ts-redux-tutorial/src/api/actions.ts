import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from './github';

export const GET_USER_PROFILE = 'github/GIT_HUB_GET_USER';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();