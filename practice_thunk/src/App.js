import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDisplay from './components/CountDisplay';
import CountButton from './components/CountButton';
import LoginPanel from './components/LoginPanel';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <CountDisplay></CountDisplay>
      <CountButton></CountButton>
      <LoginPanel></LoginPanel>
    </div>
  );
}

export default App;
