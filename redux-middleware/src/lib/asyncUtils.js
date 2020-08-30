export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return () => async dispatch => {
        dispatch({ type });

        try {
            const payload = await promiseCreator();
            dispatch({
                type: SUCCESS,
                payload
            });
        }
        catch (e) {
            dispatch({
                type: ERROR,
                payload: e,
                error: true,
            });
        }
    };
};

const defaultIdSelector = param => param;

export const createPromiseThunkById = (type, promiseCreator, idSelector = defaultIdSelector) => {
    return param => async (dispatch) => {

        const id = idSelector(param);

        const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

        dispatch({ type });
        console.log(dispatch);

        try {
            const payload = await promiseCreator(id);

            dispatch({
                type: SUCCESS,
                payload,
                error: null,
                meta: id
            });

        } catch (e) {
            dispatch({
                type: ERROR,
                payload: e,
                error: true,
                meta: id
            });
        }
    };
};

export const reducerUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null,
    }),
    success: (data) => ({
        data,
        loading: false,
        error: null
    }),
    error: (error) => ({
        data: null,
        loading: false,
        error
    })
};

export const handleAsyncActions = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(keepData ? state[key].data : null),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                };
            default:
                return state;
        }
    };
};

export const handleAsyncActionsById = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (state, action) => {
        const id = action.meta;

        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(state.post[id] && state.post[id].data)
                    }
                };

            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload)
                    }
                };

            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload)
                    }
                };

            default:
                return state;
        }
    };
};