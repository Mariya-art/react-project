import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(null);
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [hasAuthor, setHasAuthor] = useState(false);

  useEffect(() => { 
    if(hasAuthor) {
      setTimeout(() => {
        setState(messageList.push({id: messageList.length+1, text: 'Привет, ' + author, author: 'Робот'}));
      }, 1000);
    }
    setHasAuthor(false);
  }, [hasAuthor])

  return (
    <div className="App">
      <h1>Приложение React</h1>

      <p><b>Ваше имя:</b><br />
        <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </p>
      <p><b>Сообщение:</b><br />
        <input value={message} onChange={(e) => setMessage(e.target.value)}/>
      </p>
      <button onClick={() => {
        if (author !== '') {
          setHasAuthor(true);
        } else {
          setHasAuthor(false);
        }
        setState(messageList.push({id: messageList.length+1, text: message, author: author}));
      }}>Отправить</button>

      {messageList.map((item) => {
        return(
          <div key={item.id}>
            <p className='author'>{item.author}: <span className='text'>{item.text}</span></p>
          </div>
        )}
      )}
    </div>
  );
}

export default App;
