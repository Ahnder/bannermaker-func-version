import React, { useState, useCallback } from 'react';
import './App.css';

import CanvasComponent from './components/CanvasComponent';
import TextInputComponent from './components/TextInputComponent';
import PaletteComponent from './components/PaletteComponent';

import randomColorSelector from './lib/api/randomColorSelector';

function App() {
  const [color, setColor] = useState(randomColorSelector());
  const [text, setText] = useState('Sample Text');

  const onChangeColor = useCallback((color) => {
    setColor(color.hex);
  }, []);
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div className="App">
      <CanvasComponent color={color} text={text} />
      <TextInputComponent onChangeText={onChangeText} />
      <PaletteComponent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export default App;
