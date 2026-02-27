import { useState, useEffect } from "react";

export function useIncrementalNumber(target: number, duration = 1000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target <= 0) return;

    const stepTime = duration / target;

    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return value;
}