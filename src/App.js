import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, TextField } from '@mui/material';
import { Business, Diversity1, Diversity3 } from '@mui/icons-material';

function App() {
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    {
      id: 1,
      title: 'Семья',
      icon: <Diversity1 />,
    },
    {
      id: 2,
      title: 'Работа',
      icon: <Business />,
    },
    {
      id: 3,
      title: 'Друзья',
      icon: <Diversity3 />,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageList(prevState => [...prevState, {
      id: prevState.length + 1, 
      text: message, 
      author: author,
    }]);
    setAuthor('');
    setMessage('');
  }

  useEffect(() => { 
    setTimeout(() => {
      botAnswer();
    }, 1000);
  }, [messageList])

  function botAnswer() {
    let lastMessage = messageList[messageList.length - 1];
    if(lastMessage && lastMessage.author && lastMessage.author !== 'Робот') {
      setMessageList(prevState => [...prevState, {
        id: prevState.length + 1, 
        text: 'Привет, ' + lastMessage.author, 
        author: 'Робот',
      }]);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField 
              label='Ваше имя' 
              variant='outlined' 
              margin='normal' 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
            />
          </Grid>
          <Grid item xs={2}>
            <TextField 
              label='Сообщение' 
              variant='outlined' 
              margin='normal' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            /><br />
          </Grid>
          <Grid item xs={2}>
            <br />
            <Button type='submit' variant='contained' size='large'>Отправить</Button><br /><br />
          </Grid>
        </Grid>
      </form><br />

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            subheader={<ListSubheader component="div">Список чатов</ListSubheader>}
          >
            {chatList.map((item) => {
              return(
                <ListItemButton key={item.id}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText secondary={item.title} />
                </ListItemButton>
              )}
            )}
          </List>
        </Grid>
        <Grid item xs={8}>
          {messageList.map((item) => {
            return(
              <div key={item.id}>
                <p className='author'>{item.author}: <span className='text'>{item.text}</span></p>
              </div>
            )}
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
