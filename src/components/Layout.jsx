import '../App.css';
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ pages }) => {

    return (
        <>
        <header>
            <Header pages={pages}/>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <br />
            <br />
            FOOTER
        </footer>
        </>
    );
};

export default Layout;