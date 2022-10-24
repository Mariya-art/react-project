import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/userReducer/userReducer';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
        navigate('/login');
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                <button type='submit'>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;