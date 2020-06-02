import React from 'react';
import './PaletteComponent.css';

import { CirclePicker, HuePicker } from 'react-color';

const PaletteComponent = ({ color, onChangeColor }) => {
  return (
    <div className="paletteWrapper">
      <div className="circlePicker">
        <CirclePicker color={color} onChange={onChangeColor} />
      </div>
      <div className="huePicker">
        <HuePicker color={color} onChange={onChangeColor} />
      </div>
    </div>
  );
};

export default PaletteComponent;
