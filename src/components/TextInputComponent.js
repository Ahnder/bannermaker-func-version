import React from 'react';

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
