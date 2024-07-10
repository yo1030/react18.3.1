import { useEffect, useState } from 'react';
import { usePointerPosition } from './usePointerPosition';

export type PositionType = {
  x: number,
  y: number
}

function useDelayedValue(value: PositionType, delay: number) {
  const [position, setPosition] = useState<PositionType>(value);

  useEffect(() => {
    setTimeout(() => {
      setPosition(value);
    }, delay);
  }, [value, delay]);

  return position;
}

export default function TrackPointer() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

type DotType = {
  position: PositionType,
  opacity: number
}

function Dot({ position, opacity }: DotType) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      minHeight: 0
    }} />
  );
}
