import React from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
