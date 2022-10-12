import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/usersReducer/usersReducer';
import { usersSelector, loadingSelector, errorSelector } from '../redux/usersReducer/usersSelector';

const Users = () => {
    const users = useSelector(usersSelector);
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const fetchUsers = () => {
        dispatch(getUsers());
    };

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
                Произошла ошибка. Попробуйте еще раз <button onClick={fetchUsers}>Получить данные о пользователях</button>
            </div>
        );
    }

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {user.name}, {user.email}
                    </div>
                )
            }) }
        </div>
    );
};

export default Users;