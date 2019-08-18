import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleDisplayer from './components/SampleDisplayer';
import SampleButton from './components/SampleButton';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <SampleDisplayer></SampleDisplayer>
      <SampleButton></SampleButton>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
