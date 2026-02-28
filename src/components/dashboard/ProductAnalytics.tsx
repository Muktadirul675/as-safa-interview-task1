import { useIncrementalNumber } from "../../hooks/useIncrementalNumber";

function getColorClass(value: number) {
  if (value > 80) return "bg-theme-primary";
  if (value > 50) return "bg-theme-secondary";
  return "bg-theme-hover";
}

function AnalyticsBar({ label, percentage }: { label: string; percentage: number }) {
  const animatedValue = useIncrementalNumber(percentage);

  return (
    <div className="flex flex-row md:flex-col items-start md:items-center gap-2 flex-1">
      <span className="md-hidden text-sm font-medium">{label}</span>
      <div className="relative w-full h-3 md:w-10 md:h-35 rounded-full overflow-hidden bg-[repeating-linear-gradient(45deg,#91c8af,#fff_5px)] md:bg-[repeating-linear-gradient(135deg,#91c8af,#fff_5px,#fff_10px)]">
        <div className="absolute inset-0">
          <div className={`md-hidden h-[20px] ${getColorClass(animatedValue)}`} style={{ width: `${animatedValue}%` }} />
          <div className={`sm-hidden absolute bottom-0 w-full ${getColorClass(animatedValue)}`} style={{ height: `${animatedValue}%` }} />
        </div>
      </div>
      <span className="sm-hidden text-sm font-medium mt-2">{label}</span>
    </div>
  );
}

export default function ProductAnalytics({ analytics }: { analytics: Analytics[]; }) {
  const analyticsForDisplay = analytics.map((item) => ({
    label: new Date(item.date).toLocaleDateString("en-US", { dateStyle: "medium" }),
    percentage: item.views > 0 ? (item.clicks / item.views) * 100 : 0,
  }));


  return (
    <div className="w-full p-5 bg-white rounded-lg md:rounded-2xl">
      <h3 className="text-2xl font-semibold font-medium">Product Analytics</h3>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
        {analyticsForDisplay.map((item, index) => (
          <AnalyticsBar key={index} label={item.label} percentage={item.percentage} />
        ))}
      </div>
    </div>
  );
}