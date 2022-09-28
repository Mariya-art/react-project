import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [messageList, setMessageList] = useState([]);
    
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
                {messageList.map((item) => {
                    return(
                        <div key={item.id}>
                        <p className='author'>{item.author}: <span className='text'>{item.text}</span></p>
                        </div>
                    )}
                )}
            </Grid>
        </div>
    );
};

export default Chat;