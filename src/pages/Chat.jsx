import { Button, Grid, ListItemButton, TextField } from '@mui/material';

const Chat = ({ handleSubmit, author, setAuthor, message, setMessage, chatMessages, handleDelete }) => (
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
                    onChange={setAuthor} 
                />
            </Grid>
            <Grid item xs={2}>
                <TextField 
                    label='Сообщение' 
                    variant='outlined' 
                    margin='normal' 
                    value={message} 
                    onChange={setMessage} 
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

export default Chat;