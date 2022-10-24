import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginInitiate } from '../redux/userReducer/userReducer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        navigate('/chats');
    }

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleLogin}>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Войти</button>
            </form>
        </div>
    );
};

export default Login;