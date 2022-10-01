import '../App.css';
import React, { useContext } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context';

const Layout = ({ pages }) => {
    const { themes } = useContext(ThemeContext);
    return (
        <div style={{ background: themes.background, color: themes.text }}>
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
        </div>
    );
};

export default Layout;