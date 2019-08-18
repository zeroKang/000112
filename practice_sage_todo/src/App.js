import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleDisplayer from './components/SampleDisplayer';
import SampleButton from './components/SampleButton';

function App() {
  return (
    <div className="App">
      <SampleDisplayer></SampleDisplayer>
      <SampleButton></SampleButton>
    </div>
  );
}

export default App;
