import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();

    return (
        <div>
            <br />
            <h3>Home</h3>
            <p>
                Счетчик: {count}
            </p>
            <button onClick={() => dispatch({ type: 'increase' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Сбросить счетчик</button>
        </div>
    );
};

export default Home;