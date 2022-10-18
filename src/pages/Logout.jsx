import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/userReducer/userReducer';

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(logoutInitiate());
        }
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    }

    return (
        <div>
            <h2>Выход</h2>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Выйти</button>
            </form>
        </div>
    );
};

export default Logout;