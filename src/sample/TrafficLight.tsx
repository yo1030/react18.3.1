import React from 'react';
import { useState } from 'react';

export const TrafficLight: React.FC = () => {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    alert(walk ? 'Stop is next' : 'Walk is next')
    setWalk(!walk);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </div>
  );
}
