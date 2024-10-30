import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>Welcome to the Holberton Dashboard</h1>
      </header>
    </div>
  );
}

export default App;

