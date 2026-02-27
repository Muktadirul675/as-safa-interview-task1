import { useIncrementalNumber } from "../../hooks/useIncrementalNumber";

export default function IncrementalNumber({num}:{num:number}) {
  const value = useIncrementalNumber(num);

  return value;
}