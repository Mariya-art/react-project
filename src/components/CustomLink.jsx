import React from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import classNames from 'classnames';

const CustomLink = ({ to, children }) => {
    const classes = classNames(
        'nav',
    );

    const match = useMatch(to);
    return (
        <Link to={to} style={{ color: match ? '#1de9b6' : 'white'}} className={classes}>
            {children}
        </Link>
    );
};

export default CustomLink;