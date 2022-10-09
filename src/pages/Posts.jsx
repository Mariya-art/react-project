import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/postsReducer/postsReducer';

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        {post.title}
                    </div>
                )
            }) }
        </div>
    );
};

export default Posts;