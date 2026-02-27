import { useState, useEffect } from "react";
import { BiPause, BiReset } from "react-icons/bi";
import ThemeButton from "../ui/ThemeButton";

export default function TimeTracker() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const pause = () => setRunning(false);
  const resume = () => setRunning(true);
  const reset = () => setSeconds(0);

  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="relative rounded-xl p-4 md:p-6 bg-[url('/gc2.webp')] bg-cover bg-center bg-no-repeat text-white w-full max-w-md mx-auto h-64 flex flex-col">
      <h3 className="text-2xl font-semibold">
        Time Tracker
      </h3>

      <div className="flex flex-col items-center justify-around flex-1">
        <div className="text-5xl md:text-6xl font-bold tracking-widest">
          {hrs}:{mins}:{secs}
        </div>

        <div className="flex gap-4">
          <ThemeButton onClick={running ? pause : resume}>
            <BiPause size={22} />
          </ThemeButton>

          <button
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-md flex items-center justify-center"
          >
            <BiReset size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}