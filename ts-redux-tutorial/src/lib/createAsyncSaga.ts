import { call, put } from '@redux-saga/core/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>)

//action.payload !=== undefined 라면
//파라미터로 받아온 action 은 PayloadAction<string, any> 타입이다.
function isPayloadAction(action: any): action is PayloadAction<string, any> {
    return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>
(
    asyncActionCreator: AsyncActionCreatorBuilder<[T1, [P1, undefined]], [T2, [P2, undefined]], [T3, [P3, undefined]]>, 
    promiseCreator: PromiseCreatorFunction<P1, P2>
){
    return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
        try{
            const result: P2 = isPayloadAction(action) 
                                ? yield call(promiseCreator, action.payload) 
                                : yield call(promiseCreator) 

            yield put(asyncActionCreator.success(result))
        } catch(e){
            yield put(asyncActionCreator.failure(e));
        }
    }
}