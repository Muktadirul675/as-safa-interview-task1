import { useState, useEffect } from "react";

export function useIncrementalNumber(target: number, duration = 1000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target <= 0) return;

    const intervalTime = 16;
    const steps = Math.ceil(duration / intervalTime);
    const increment = target / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return value;
}