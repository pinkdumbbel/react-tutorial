import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { getPost } from '../module/posts';

function PostContainer({ match }) {
    const { id } = match.params;

    const { data, loading, error } = useSelector(state => (state.posts.post));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(parseInt(id)));
    }, [dispatch, id]);

    if (loading) return <div>...로딩중</div>;
    if (error) return <duv>에러 발생!</duv>;
    if (!data) return null;

    return (
        <Post post={data} />
    );
}

export default PostContainer;