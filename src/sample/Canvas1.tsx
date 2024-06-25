import React from 'react';
import { useState } from 'react';
import Background from './Background';
import Box from './Box';

const initialPosition = {
  x: 0,
  y: 0
};

export const Canvas1: React.FC = () => {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape,
      position: {
        x : shape.position.x + dx,
        y : shape.position.y + dy
      }
    });
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <div className='canvas'>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </div>
  );
}
