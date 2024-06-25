import React from 'react';
import { useState } from 'react';
import { produce } from 'immer';
import Background from './Background';
import Box from './Box';

const initialPosition = {
  x: 0,
  y: 0
};

export const CanvasImmer = () => {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx: number, dy: number) {
    setShape(produce(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    }))
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setShape(produce(draft => {
      draft.color = e.target.value
    }));
  }

  return (
    <>
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
    </>
  );
}
