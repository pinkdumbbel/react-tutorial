import createAsyncThunk from '../lib/createAsyncThunk';
import { getUserProfileAsync } from './actions';
import { getUserProfile } from './github';

/* export default function getUserProfileThunk(userName: string){
    return async (dispatch: Dispatch) => {
        const {request, success, failure} = getUserProfileAsync
        try{
            dispatch(request());

            const getUser = await getUserProfile(userName);

            dispatch(success(getUser));
        }catch(e) {
            dispatch(failure(e));
        }
    }
} */

const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
)

export default getUserProfileThunk;