import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { getPost, goToHome } from '../module/posts';
import { reducerUtils } from '../lib/asyncUtils';

function PostContainer({ match }) {
    const { id } = match.params;

    const { data, loading, error } = useSelector(
        state => {
            return (state.posts.post[id] || reducerUtils.initial());
        }
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(parseInt(id)));
    }, [dispatch, id]);

    if (loading && !data) return <div>...로딩중</div>;
    if (error) return <duv>에러 발생!</duv>;
    if (!data) return null;

    return (
        <>
            <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
            <Post post={data} />
        </>
    );
}

export default PostContainer;