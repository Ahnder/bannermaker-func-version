import React from 'react';
import './PaletteComponent.css';

import { CirclePicker, HuePicker } from 'react-color';

const PaletteComponent = () => {
  return (
    <div className="paletteWrapper">
      <div className="circlePicker">
        <CirclePicker />
      </div>
      <div className="huePicker">
        <HuePicker />
      </div>
    </div>
  );
};

export default PaletteComponent;
