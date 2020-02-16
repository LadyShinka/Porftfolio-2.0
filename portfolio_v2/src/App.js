import React from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
    </div>
  );
}

export default App;
