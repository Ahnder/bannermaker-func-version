import React, { useRef, useEffect } from 'react';
import './CanvasComponent.css';

function setFont(canvas, text, args) {
  const ctx = canvas.getContext('2d');
  const { color, size, font } = args;

  ctx.font = `${size}px ${font}`;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

const CanvasComponent = ({ color, text }) => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setFont(canvas, text, {
      color: 'white',
      size: '40',
      font: 'Arial',
    });
  }, [color, text]);

  return <canvas ref={ref} width="700" height="350" />;
};

export default CanvasComponent;
