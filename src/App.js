import React, { useState, useCallback } from 'react';
import './App.css';

import CanvasComponent from './components/CanvasComponent';
import TextInputComponent from './components/TextInputComponent';
import PaletteComponent from './components/PaletteComponent';
import ImgDownloadComponent from './components/ImgDownloadComponent';

import randomColorSelector from './lib/api/randomColorSelector';

function App() {
  const randomColor = randomColorSelector();

  const [color, setColor] = useState(randomColor);
  const [text, setText] = useState('Sample Text');
  const [href, setHref] = useState('');

  const onChangeColor = useCallback((color) => {
    setColor(color.hex);
  }, []);
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onChangeHref = useCallback((href) => {
    setHref(href);
  }, []);

  return (
    <div className="App">
      <CanvasComponent
        color={color}
        text={text}
        href={href}
        onChangeHref={onChangeHref}
      />
      <TextInputComponent onChangeText={onChangeText} />
      <PaletteComponent color={color} onChangeColor={onChangeColor} />
      <ImgDownloadComponent href={href} />
    </div>
  );
}

export default App;
