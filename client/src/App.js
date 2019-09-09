import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/costumers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React-express App</h3>
      </header>
      <Customers />
    </div>
  );
}

export default App;
