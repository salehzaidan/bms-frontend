/**
 * Custom Hook to call function in an interval
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay?: number) {
  const savedCallback = useRef<() => void | null>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current!();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return;
  }, [delay]);
}

export default useInterval;
