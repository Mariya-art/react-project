import '../App.css';
import React, { useContext } from 'react';
import CustomLink from './CustomLink';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { ListItemButton } from '@mui/material';
import { ThemeContext } from '../context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/userReducer/userReducer';

const Header = ({ pages }) => {
    const { toggleTheme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
    const navigate = useNavigate('');

    const handleLogout = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(logoutInitiate());
        }
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <CustomLink key={page.id} to={page.url}>
                                {page.title}
                            </CustomLink>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <ListItemButton to={'/register'}>Регистрация</ListItemButton>
                    </Box>
                    {user ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <ListItemButton onClick={handleLogout}>Выход</ListItemButton>
                        </Box>
                    ) : (
                        <Box sx={{ flexGrow: 0 }}>
                            <ListItemButton to={'/login'}>Вход</ListItemButton>
                        </Box>
                    )}
                    <Box sx={{ flexGrow: 0 }}>
                        <ListItemButton onClick={toggleTheme}>Переключить тему</ListItemButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;