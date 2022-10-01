import '../App.css';
import React, { useContext } from 'react';
import CustomLink from './CustomLink';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { ListItemButton } from '@mui/material';
import { ThemeContext } from '../context';

const Header = ({ pages }) => {
    const { toggleTheme } = useContext(ThemeContext);
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
                        <ListItemButton onClick={toggleTheme}>Переключить тему</ListItemButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;