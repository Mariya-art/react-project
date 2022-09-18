import './App.css';
import Message from './Message';

function App() {
  const name = 'Мария';

  return (
    <div className="App">
      <h1>Приложение React</h1>

      <Message name={name} />
    </div>
  );
}

export default App;
