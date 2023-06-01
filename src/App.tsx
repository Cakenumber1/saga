import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
        .then(res => res.json())
        .then(console.log);
  })
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
