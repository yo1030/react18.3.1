import { useState } from 'react';

export default function OnOffToggle() {
  const [isOnOff, setIsOnOff] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => {
        setIsOnOff(!isOnOff);
      }}>
        {isOnOff ? 'On' : 'Off'}
      </button>
    </div>
  );
}
