import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import CounterButton from './component/CounterButton';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterButton></CounterButton>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
