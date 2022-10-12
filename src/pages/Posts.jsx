import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/postsReducer/postsReducer';
import { postsSelector, loadingSelector, errorSelector } from '../redux/postsReducer/postsSelector';

const Posts = () => {
    const posts = useSelector(postsSelector);
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])

    if (loading) {
        return (
            <div>
                Идет загрузка....
            </div>
        );
    }

    if (error) {
        return (
            <div>
                Произошла ошибка
            </div>
        );
    }

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