import { useState, useEffect } from 'react';
import { PositionType } from './TrackPointer';

export function usePointerPosition() {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e: PointerEvent) {
      setPosition({ x: e.pageX, y: e.pageY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
  return position;
}
