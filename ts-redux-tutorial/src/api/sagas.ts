import { takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../lib/createAsyncSaga';
import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
import { getUserProfile } from './github';

/* function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>){
    try{
        const userProfile: GithubProfile = yield call(getUserProfile, action.payload);

        yield put(getUserProfileAsync.success(userProfile));
    }catch(e) {
        yield put(getUserProfileAsync.failure(e));
    }
} */

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga(){
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}