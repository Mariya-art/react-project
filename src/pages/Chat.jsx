import React, { useState } from 'react';
import { Button, Grid, ListItemButton, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { messagesSelector } from '../redux/messagesReducer/messagesSelector';

const Chat = () => {
    const messages = useSelector(messagesSelector);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');

    const chatMessages = messages.filter((item) => {
        if (!id) {
            return true;
        }
        return item.chatId === Number(id);
    });

    const handleDelete = (id) => {
        dispatch({ type: 'deleteMessage', payload: id });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            id: Date.now(),
            text: message,
            author: author,
            chatId: Number(id),
        };
        dispatch({ type: 'addMessage', payload: newMessage });
        setAuthor('');
        setMessage('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField 
                            label='Ваше имя'
                            autoFocus
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
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <br />
                        <Button type='submit' variant='contained' size='large'>Отправить</Button><br /><br />
                    </Grid>
                </Grid>
            </form>
            <Grid item xs={8}>
                {chatMessages.map((item) => {
                    return(
                        <Grid key={item.id} container spacing={0}>
                            <Grid key={item.id} item>
                                <p className='author'>{item.author}: <span className='text'>{item.text}</span></p>
                            </Grid>
                            <Grid item>
                                <ListItemButton onClick={() => handleDelete(item.id)} sx={{color: '#f50057', pt: 2}}>X</ListItemButton>
                            </Grid>
                        </Grid>
                    )}
                )}
            </Grid>
        </div>
    );
};

export default Chat;