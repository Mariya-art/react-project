import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <br />
            Not found page. Please, go to <Link to={'/'}>Home</Link>
        </div>
    );
};

export default NotFoundPage;