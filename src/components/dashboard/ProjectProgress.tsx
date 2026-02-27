const completed = 78;
const inProgress = 52;

const radius = 140;
const stroke = 48;
const normalizedRadius = radius - stroke / 2;

const startAngle = Math.PI * 0.9;
const endAngle = Math.PI * 0.1;
const totalAngle = startAngle - endAngle;
const circumference = normalizedRadius * totalAngle;

const polarToCartesian = (angle: number) => ({
  x: radius + normalizedRadius * Math.cos(angle),
  y: radius - normalizedRadius * Math.sin(angle),
});

const start = polarToCartesian(startAngle);
const end = polarToCartesian(endAngle);

const arcPath = `
  M ${start.x} ${start.y}
  A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${end.x} ${end.y}
`;

const getOffset = (value: number) =>
  circumference - (value / 100) * circumference;

export default function ProjectProgress() {
  const completedOffset = getOffset(completed);
  const progressOffset = getOffset(inProgress);
  const completedIsBigger = completed > inProgress;

  return (
    <div className="rounded-2xl bg-white p-5 md:p-10 max-w-full overflow-hidden">
      <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
        Project Progress
      </h3>

      <div className="flex justify-center mt-8 md:mt-14 relative">
        <svg
          viewBox={`0 0 ${radius * 2} ${radius + 20}`}
          className="w-full max-w-xs md:max-w-[280px] h-auto"
        >
          <defs>
            <pattern
              id="pendingPattern"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
              patternTransform="rotate(-45)"
            >
              <rect width="4" height="8" fill="black" />
              <rect x="4" width="4" height="8" fill="white" />
            </pattern>
          </defs>

          <path
            d={arcPath}
            fill="transparent"
            stroke="url(#pendingPattern)"
            strokeWidth={stroke}
            strokeLinecap="round"
          />

          {completedIsBigger ? (
            <>
              <path
                d={arcPath}
                fill="transparent"
                stroke="var(--color-theme-primary)"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={completedOffset}
                strokeLinecap="round"
              />
              <path
                d={arcPath}
                fill="transparent"
                stroke="var(--color-theme-secondary)"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <path
                d={arcPath}
                fill="transparent"
                stroke="var(--color-theme-secondary)"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
              />
              <path
                d={arcPath}
                fill="transparent"
                stroke="var(--color-theme-primary)"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={completedOffset}
                strokeLinecap="round"
              />
            </>
          )}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-2 top-10">
          <div className="text-4xl md:text-4xl font-bold text-black truncate">
            {completed}%
          </div>
          <div className="text-xs md:text-sm text-gray-500 mt-1 text-center truncate">
            Project Ended
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-theme-primary"></div>
          <div className="text-sm truncate">Completed</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-theme-secondary"></div>
          <div className="text-sm truncate">In Progress</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[repeating-linear-gradient(45deg,#000,#fff_4px)]"></div>
          <div className="text-sm truncate">Pending</div>
        </div>
      </div>
    </div>
  );
}