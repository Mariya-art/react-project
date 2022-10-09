import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { messagesSelector } from '../redux/messagesReducer/messagesSelector';
import Chat from './Chat';

const ChatContainer = () => {
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
        dispatch({ 
            type: 'deleteMessage', 
            payload: id, 
            meta: {
                delayMs: 3000,
            },
        });
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
        <Chat
            handleSubmit={handleSubmit}
            author={author}
            setAuthor={(e) => setAuthor(e.target.value)}
            message={message}
            setMessage={(e) => setMessage(e.target.value)}
            chatMessages={chatMessages}
            handleDelete={handleDelete}
        />
    );
};

export default ChatContainer;