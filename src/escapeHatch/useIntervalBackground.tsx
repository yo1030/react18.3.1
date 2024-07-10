import { useCallback, useEffect } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

export function useInterval(callback: () => void, delay: number) {
  // const onTick = useEffectEvent(callback)
  const onTick = useCallback(callback, [callback])
  useEffect(() => {
    console.log('✅ Setting up an interval with delay ', delay)
    const id = setInterval(onTick, delay);
    return () => {
      console.log('❌ Clearing an interval with delay ', delay)
      clearInterval(id);
    };
  }, [delay]);
}
