import React, { useRef, useEffect } from 'react';

const CanvasComponent = ({ color }) => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return <canvas ref={ref} width="700" height="350" />;
};

export default CanvasComponent;
