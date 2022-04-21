import logo from './logo.svg';
import './App.css';

import React from 'react';
import Song_lookup from './components/song_lookup';

import 'bootstrap/dist/css/bootstrap.min.css';
document.body.style = 'background: whitesmoke;';

function App() {
  return (
    <div className="App">
      <Song_lookup />
    </div>
  );
}

export default App;
