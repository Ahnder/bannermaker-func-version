import React from 'react';
import './TextInputComponent.css';

const TextInputComponent = ({ onChangeText }) => {
  return (
    <input
      className="textInput"
      type="text"
      size="40"
      placeholder="Type Text Here"
      onChange={onChangeText}
    />
  );
};

export default TextInputComponent;
