import { Grid, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

const Chats = ({ title, setTitle, handleAdd, handleDelete, chats }) => (
    <div className="App">
    <Grid container spacing={3}>
        <Grid item xs={2}>
            <br />
            <input value={title} onChange={setTitle}></input>
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

export default Chats;