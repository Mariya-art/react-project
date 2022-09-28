import '../App.css';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Chats from '../pages/Chats';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Layout from './Layout';
import NotFoundPage from '../pages/NotFoundPage';
import Chat from '../pages/Chat';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#1de9b6',
    },
  },
});

function App() {
  const [pages] = useState([
    {
      id: 1,
      title: 'HOME',
      url: '/',
    },
    {
      id: 2,
      title: 'CHATS',
      url: '/chats',
    },
    {
      id: 3,
      title: 'PROFILE',
      url: '/profile',
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={'/'} element={<Layout pages={pages}/>}>
          <Route index element={<Home />}/>
          <Route path={'/chats'} element={<Chats />}/>
          <Route path={'/profile'} element={<Profile />}/>
          <Route path={'*'} element={<NotFoundPage />}/>
          <Route path={'/chats/:id'} element={<Chat />}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;