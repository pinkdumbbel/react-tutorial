import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.loading };

    case 'SUCESS':
      return { ...state, users: action.users, loading: action.loading };

    case 'ERROR':
      return { ...state, error: action.error };

    default:
      return 'ERROR';
  }
}

function AsyncReducer(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    users: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING', loading: true });
    try {
      const data = await callback();
      dispatch({
        type: 'SUCESS',
        users: data,
        loading: false,
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: e,
      });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default AsyncReducer;
