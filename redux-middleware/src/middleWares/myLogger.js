//compose from redux/compose.js
function compose(...funcs) {

    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args);
        let dispatch = () => {
            throw new Error(
                'Dispatching while constructing your middleware is not allowed. ' +
                'Other middleware would not be applied to this dispatch.'
            );
        };

        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        };

        const chain = middlewares.map(middleware => {
            return middleware(middlewareAPI);
        });

        const compseFunction = compose(...chain);

        dispatch = compseFunction(store.dispatch);

        return {
            ...store,
            dispatch
        };
    };
}

//  createThunkMiddleware from redux-thunk.js
export function createThunkMiddleware(extraArgument) {
    return function thunkFunction({ dispatch, getState }) {
        return function nextFunction(next) {
            return function actionFunction(action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
        };
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;