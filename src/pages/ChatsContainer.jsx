import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector } from '../redux/chatsReducer/chatsSelector';
import Chats from './Chats';

function ChatsContainer() {
    const chats = useSelector(chatsSelector);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleDelete = (id) => {
        dispatch({ type: 'delete', payload: id });
    };

    const handleAdd = () => {
        const newChat = {
            id: Date.now(),
            title: title,
        };
        dispatch({ type: 'add', payload: newChat });
    };

    return (
        <Chats
            title={title}
            setTitle={(e) => setTitle(e.target.value)}
            handleAdd={handleAdd}
            chats={chats}
            handleDelete={handleDelete}
        />
    );
};

export default ChatsContainer;