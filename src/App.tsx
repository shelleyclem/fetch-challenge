import React from 'react';
import logo from './logo.svg';
import './App.css';

import Geo from './components/geo/Geo'
import Weather from './components/weather/weather'

function App() {
  return (
    <div className="App">
      <Geo />
      <Weather />
    </div>
  );
}

export default App;
