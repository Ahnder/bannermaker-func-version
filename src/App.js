import React, { useState } from 'react';
import './App.css';

import CanvasComponent from './components/CanvasComponent';
import TextInputComponent from './components/TextInputComponent';
import PaletteComponent from './components/PaletteComponent';

function App() {
  const [color, setColor] = useState('violet');
  const [text, setText] = useState('Sample Text');

  return (
    <div className="App">
      <h4>Banner Maker</h4>
      <CanvasComponent color={color} text={text} />
      <br />
      <TextInputComponent />
      <br />
      <PaletteComponent />
    </div>
  );
}

export default App;
