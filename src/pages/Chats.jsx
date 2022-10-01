import React, { useState } from 'react';
import { Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Business, Diversity1, Diversity3, Group } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Chats() {
    const [title, setTitle] = useState('');
    const [chatList, setChatsList] = useState([
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

    const handleDelete = (id) => {
        const filteredChats = chatList.filter((chat) => chat.id !== id);
        setChatsList(filteredChats);
    };

    const handleAdd = () => {
        const newChat = {
            id: Date.now(),
            title: title,
            icon: <Group />,
        };
        setChatsList(prevState => [...prevState, newChat]);
    };

    return (
        <div className="App">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <br />
                    <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <button onClick={handleAdd}>Добавить чат</button><br /><br />
                    <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    subheader={<ListSubheader component="div">Список чатов</ListSubheader>}
                    >
                    {chatList.map((item) => { 
                        return(
                            <Grid key={item.id} container spacing={1}>
                                <Grid item>
                                    <Link key={item.id} to={`/chats/${item.id}`}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText secondary={item.title} />
                                        </ListItemButton>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <ListItemButton onClick={() => handleDelete(item.id)} style={{color: '#f50057'}}>X</ListItemButton>
                                </Grid>
                            </Grid>
                        )}
                    )}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default Chats;