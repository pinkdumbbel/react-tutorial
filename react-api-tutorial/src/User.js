import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, data: user, error } = state.user;

  console.log(state);

  useEffect(() => {
    getUser(dispatch, id);
    // eslint-disable-next-line
  }, [dispatch, id]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <>
      <div>
        <h1>{user.username}</h1>
      </div>
      <div>email:{user.email}</div>
    </>
  );
}

export default User;
