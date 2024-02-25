import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState(null);
  async function onClick()
  {
    const url = "http://localhost:3000/api/auth/google";
    window.location.href = url;
  }

  return (
    <div>
      {message && <div>{message}</div>}
      <button onClick={onClick}>Log In</button>
    </div>
  );
}

export default App;
