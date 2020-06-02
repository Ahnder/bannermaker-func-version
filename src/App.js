import React from 'react';
import './App.css';

import CanvasComponent from './components/CanvasComponent';
import TextInputComponent from './components/TextInputComponent';
import PaletteComponent from './components/PaletteComponent';

function App() {
  return (
    <div className="App">
      <CanvasComponent />
      <TextInputComponent />
      <PaletteComponent />
    </div>
  );
}

export default App;
