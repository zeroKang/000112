import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import CounterButton from './component/CounterButton';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterButton></CounterButton>
    </div>
  );
}

export default App;
