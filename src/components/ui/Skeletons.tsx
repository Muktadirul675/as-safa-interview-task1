export default function Skeleton({ className }: { className?: string }) {
  return <div className={`bg-gray-200 animate-pulse rounded ${className}`} />;
}

export function CardsGroupSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="flex-1 p-4 rounded-lg md:rounded-2xl bg-white shadow">
          <Skeleton className="h-6 w-1/2 mb-4" />
          <Skeleton className="h-12 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}

export function ListSkeleton({ items = 5 }: { items?: number }) {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: items }).map((_, idx) => (
        <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg md:rounded-xl">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1 flex flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AnalyticsSkeleton({ count = 7 }: { count?: number }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2 w-full md:w-10">
          <Skeleton className="h-24 w-6 rounded" />
          <Skeleton className="h-4 w-6 mt-1" />
        </div>
      ))}
    </div>
  );
}

export function BarsSkeleton({ count = 7 }: { count?: number }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end w-full p-5">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="flex flex-col items-center w-full md:w-10 gap-2 flex-1">
          <div className="h-24 w-full md:h-32 md:w-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export function SemiCircleProgressSkeleton() {
  const radius = 140
  const stroke = 48
  const normalizedRadius = radius - stroke / 2
  const startAngle = Math.PI * 0.9
  const endAngle = Math.PI * 0.1
  const polarToCartesian = (angle: number) => ({
    x: radius + normalizedRadius * Math.cos(angle),
    y: radius - normalizedRadius * Math.sin(angle),
  })
  const start = polarToCartesian(startAngle)
  const end = polarToCartesian(endAngle)
  const arcPath = `
    M ${start.x} ${start.y}
    A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${end.x} ${end.y}
  `
  return (
    <div className="rounded-2xl bg-white p-5 md:p-10 max-w-full overflow-hidden">
      <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left mb-6 animate-pulse bg-gray-200 w-40 h-6 rounded"></h3>
      <div className="flex justify-center relative">
        <svg viewBox={`0 0 ${radius * 2} ${radius + 20}`} className="w-full max-w-xs md:max-w-[280px] h-auto">
          <path
            d={arcPath}
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          <path
            d={arcPath}
            fill="transparent"
            stroke="#d1d5db"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={normalizedRadius * (startAngle - endAngle)}
            strokeDashoffset={normalizedRadius * (startAngle - endAngle)}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-28 h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="flex justify-around mt-4 flex-wrap gap-2">
        <div className="h-4 w-4 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-4 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-4 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  )
}
