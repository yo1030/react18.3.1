export function getFinalState(
  baseState: number,
  queue: (number | ((n: number) => number))[]) {
  let finalState = baseState;

  // TODO: do something with the queue...
  for (let i = 0; i < queue.length; i++) {
    const q = queue[i];
    if (typeof q === "function") {
      finalState = q(finalState)
    } else {
      finalState = q;
    }
  }

  return finalState;
}
