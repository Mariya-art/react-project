import React, { useState } from 'react';
import { Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Group } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector } from '../redux/chatsReducer/chatsSelector';

function Chats() {
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
            icon: <Group />,
        };
        dispatch({ type: 'add', payload: newChat });
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
                    {chats.map((item) => { 
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