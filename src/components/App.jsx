import '../App.css';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import ChatContainer from '../pages/ChatContainer';
import ChatsContainer from '../pages/ChatsContainer';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Layout from './Layout';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Posts from '../pages/Posts';
import Register from '../pages/Register';
import Users from '../pages/Users';
import ProtectedRoutes from './ProtectedRoutes';

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
      title: 'POSTS',
      url: '/posts',
    },
    {
      id: 4,
      title: 'USERS',
      url: '/users',
    },
    {
      id: 5,
      title: 'CONTAСTS',
      url: '/contacts',
    },
    {
      id: 6,
      title: 'PROFILE',
      url: '/profile',
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
          <Routes>
            <Route path={'/'} element={<Layout pages={pages}/>}>
              <Route index element={<Home />}/>
              <Route path={'/chats'} element={<ChatsContainer />}/>
              <Route path={'/posts'} element={<Posts />}/>
              <Route path={'/users'} element={<Users />}/>
              <Route path={'/contacts'} element={<ProtectedRoutes>
                  <Contacts />
                </ProtectedRoutes>}/>
              <Route path={'/profile'} element={<Profile />}/>
              <Route path={'/register'} element={<Register />}/>
              <Route path={'/login'} element={<Login />}/>
              <Route path={'*'} element={<NotFoundPage />}/>
              <Route path={'/chats/:id'} element={<ChatContainer />}/>
            </Route>
          </Routes>
    </ThemeProvider>
  );
}

export default App;