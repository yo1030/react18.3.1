import { useEffect } from "react";

export const useInterval = (onTick: () => void, delay: number) => {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
}