import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountButton from './components/CountButton';
import CountDisplay from './components/CountDisplay';
import OddEvenDisplay from './components/OddEvenDisplay';

function App() {
  return (
    <div className="App">
      <CountDisplay></CountDisplay>
      <OddEvenDisplay></OddEvenDisplay>
      <CountButton></CountButton>
    </div>
  );
}

export default App;
